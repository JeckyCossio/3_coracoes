import { Pinecone } from "@pinecone-database/pinecone";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { MODELOS } from "../src/lib/fichas";

async function main() {
  const key = process.env.PINECONE_API_KEY;
  const name = process.env.PINECONE_INDEX;
  if (!key || !name) throw new Error("Defina PINECONE_API_KEY e PINECONE_INDEX no ambiente.");
  const pc = new Pinecone({ apiKey: key });
  const existing = (await pc.listIndexes()).indexes?.some((i) => i.name === name);
  if (!existing) await pc.createIndexForModel({ name, cloud: "aws", region: "us-east-1", embed: { model: "multilingual-e5-large", fieldMap: { text: "chunk_text" } }, waitUntilReady: true });
  for (const model of MODELOS) {
    const dir = join(process.cwd(), "data", "manuais", model.toLowerCase());
    let files: string[] = [];
    try { files = readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf")); } catch { continue; }
    const records: Array<Record<string, string | number>> = [];
    for (const file of files) {
      const text = execFileSync("pdftotext", ["-layout", join(dir, file), "-"], { encoding: "utf8", maxBuffer: 30_000_000 });
      text.split("\f").forEach((pageText, page) => {
        const clean = pageText.replace(/\s+/g, " ").trim();
        for (let offset = 0; offset < clean.length; offset += 1100) {
          const chunk = clean.slice(offset, offset + 1300);
          if (chunk.length < 80) continue;
          records.push({ id: `${model.toLowerCase()}-${file.replace(/[^a-z0-9]/gi, "-")}-${page + 1}-${offset}`, chunk_text: chunk, documento: file, pagina: page + 1, modelo: model });
        }
      });
    }
    for (let i = 0; i < records.length; i += 50) await pc.index(name).namespace(model.toLowerCase()).upsertRecords(records.slice(i, i + 50));
    console.log(`${model}: ${records.length} trechos enviados de ${files.length} PDF(s)`);
  }
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
