"use client";

import { useEffect, useState } from "react";

type Report = { modelo: string; problema: string; ficha: number | null; passosMostrados: string[]; passosComDificuldade: number[]; motivo: string; resumo: string; proximaAcao: string };
type Handoff = { id: string; status: string; report: Report; created_at: number };

export default function Attendant() {
  const [items, setItems] = useState<Handoff[]>([]);
  const [error, setError] = useState("");
  async function reload() {
    try { const r = await fetch("/api/painel/handoffs", { cache: "no-store" }); if (!r.ok) throw new Error(); setItems((await r.json()).items); }
    catch { setError("Não foi possível carregar a fila."); }
  }
  useEffect(() => { reload(); const timer = setInterval(reload, 5000); return () => clearInterval(timer); }, []);
  async function mark(id: string) { await fetch("/api/painel/handoffs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) }); reload(); }
  return <main className="internal-shell"><nav className="internal-nav"><a href="/">← Conversa</a><strong>TRES Ajuda</strong><a href="/dashboard">Indicadores →</a></nav><div className="internal-heading"><p className="eyebrow">Área interna · demonstração</p><h1>Fila do atendente</h1><p>Casos que o autoatendimento não concluiu. Esta fila é simulada.</p></div>{error && <p className="error">{error}</p>}<div className="cards">{items.length === 0 && <div className="empty-card">Ainda não há transferências. Inicie uma conversa e selecione um caso que precise de atendimento.</div>}{items.map((item) => <article className="case-card" key={item.id}><div className="case-meta"><span className={`status ${item.status}`}>{item.status}</span><time>{new Date(item.created_at).toLocaleString("pt-BR")}</time></div><h2>{item.report.problema}</h2><p><strong>Modelo:</strong> {item.report.modelo} {item.report.ficha && ` · Ficha ${item.report.ficha}`}</p><p><strong>Resumo:</strong> {item.report.resumo || "Resumo indisponível."}</p><p><strong>Motivo:</strong> {item.report.motivo.replaceAll("_", " ")}</p><p><strong>Passos apresentados:</strong> {item.report.passosMostrados.length ? item.report.passosMostrados.join(" ") : "Nenhum"}</p><p><strong>Passos com dificuldade:</strong> {item.report.passosComDificuldade.join(", ") || "Nenhum"}</p><div className="next-action">{item.report.proximaAcao}</div>{item.status === "aguardando" && <button type="button" onClick={() => mark(item.id)}>Marcar como atendido</button>}</article>)}</div></main>;
}
