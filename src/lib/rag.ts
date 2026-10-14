import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
import { z } from "zod";
import type { Answerer } from "./conversation";

const answerSchema = z.object({ answer: z.string().min(1).max(1000), citedIds: z.array(z.string()).max(3), supported: z.boolean() });

export const answerWithManual: Answerer = async (model, question) => {
  if (process.env.ENABLE_EXTERNAL_AI !== "1") return null;
  const pineconeKey = process.env.PINECONE_API_KEY;
  const index = process.env.PINECONE_INDEX;
  const llmKey = process.env.OPENROUTER_API_KEY;
  const llmModel = process.env.OPENROUTER_MODEL;
  if (!pineconeKey || !index || !llmKey || !llmModel) return null;

  const pc = new Pinecone({ apiKey: pineconeKey });
  const result = await pc.index(index).namespace(model.toLowerCase()).searchRecords({
    query: { inputs: { text: question.slice(0, 700) }, topK: 4 },
    fields: ["chunk_text", "documento", "pagina", "modelo"]
  });
  const hits = result.result.hits.filter((h) => Number(h._score || 0) >= Number(process.env.RAG_MIN_SCORE || "0.25"));
  if (!hits.length) return null;
  const sources = hits.map((h, i) => {
    const fields = h.fields as Record<string, unknown> | undefined;
    return { id: `F${i + 1}`, text: String(fields?.chunk_text || ""), document: String(fields?.documento || "manual"), page: Number(fields?.pagina || 0) };
  });
  if (sources.some((s) => !s.text)) return null;
  const client = new OpenAI({ apiKey: llmKey, baseURL: "https://openrouter.ai/api/v1", timeout: 10000 });
  const completion = await client.chat.completions.create({
    model: llmModel, temperature: 0,
    messages: [
      { role: "system", content: "Responda em português, de forma curta, somente com os trechos fornecidos. Não crie procedimento, diagnóstico nem URL. Se a fonte não sustentar a resposta, supported=false. Devolva JSON com answer, citedIds (IDs das fontes usadas) e supported." },
      { role: "user", content: JSON.stringify({ model, question, sources }) }
    ]
  });
  const raw = completion.choices[0]?.message?.content || "";
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) return null;
  const parsed = answerSchema.safeParse(JSON.parse(match[0]));
  if (!parsed.success || !parsed.data.supported) return null;
  const cited = sources.filter((s) => parsed.data.citedIds.includes(s.id));
  if (!cited.length || /https?:\/\//i.test(parsed.data.answer)) return null;
  return {
    text: parsed.data.answer,
    source: cited.map((s) => `${model} · ${s.document}${s.page ? ` · p. ${s.page}` : ""}`).join("; "),
    inputTokens: completion.usage?.prompt_tokens || 0,
    outputTokens: completion.usage?.completion_tokens || 0
  };
};
