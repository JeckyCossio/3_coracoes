# TRES Ajuda — protótipo do chatbot

Protótipo do Desafio 03 do Hackathon Cafeína Week 2026. O consumidor escolhe o modelo da máquina, segue uma orientação do fluxo de atendimento, confirma se resolveu e, quando necessário, gera uma transferência simulada com contexto para o atendente.

## Executar

Requer Node.js 24 ou mais recente. Para a extração de manuais PDF, requer `pdftotext` (Poppler).

```bash
npm install
cp .env.example .env.local
# edite PAINEL_SENHA em .env.local
npm run dev
```

Abra `http://localhost:3000`. A tela do atendente fica em `/atendente` e o painel de indicadores em `/dashboard`. As telas internas pedem autenticação Basic: qualquer nome de usuário e a senha `PAINEL_SENHA`.

Verificação:

```bash
npm run fichas:check
npm test
npm run typecheck
npm run build
```

Teste de ponta a ponta da API, com o servidor em execução e uma senha de painel configurada:

```bash
BASE_URL=http://localhost:3000 PANEL_PASSWORD=sua-senha npm run smoke:api
```

Esse teste cria casos simulados. Use uma instância com `SQLITE_PATH` separado do banco da demonstração quando quiser manter as métricas limpas.

## Demonstração sem chaves

1. Escolha **LOV → Problema na máquina → Outro problema** e escreva `alavanca não fecha com cápsula`.
2. Informe que o porta-cápsulas está cheio, siga o passo de limpeza e confirme **Sim, resolveu**. A resolução será registrada como **autodeclarada**.
3. Inicie outra conversa. Escolha **Touch → Problema na máquina → Vazamento**. O fluxo identifica a falta da orientação “e-mail 37” e registra uma transferência simulada.
4. Abra `/atendente` para ver o resumo e `/dashboard` para ver os dois casos. Os dados são marcados como simulados.

## IA e manuais

O fluxo das fichas funciona sem serviços externos. A classificação por IA e as respostas com RAG só são ativadas com `ENABLE_EXTERNAL_AI=1` e as variáveis `OPENROUTER_API_KEY`, `OPENROUTER_MODEL`, `PINECONE_API_KEY` e `PINECONE_INDEX`. O modelo usado no OpenRouter deve ser configurado por ID completo. O índice deve usar embedding multilíngue compatível com os manuais em português.

Coloque **somente manuais e guias públicos e verificados** em `data/manuais/<modelo>/`, usando os nomes `lov`, `modo`, `passione`, `luna` e `touch`. Depois execute:

```bash
set -a; source .env.local; set +a
npm run rag:ingest
```

O script cria um índice Pinecone com embedding integrado, se necessário, e usa um namespace para cada modelo. Cada trecho leva documento e página. A ingestão exige `pdftotext`. O PDF do fluxo de atendimento **não** entra no Pinecone. Se a busca ou a IA falhar, as fichas continuam disponíveis e as dúvidas são transferidas.

Os vídeos são escolhidos apenas de `src/lib/videos.ts`. A lista está vazia até que os links sejam fornecidos e verificados por ficha e modelo; o bot não inventa links.

## Como funciona

- `src/lib/conversation.ts`: motor de estados sem dependência do canal. Recebe evento e estado; devolve a próxima etapa e as mensagens.
- `src/lib/fichas.ts`: 13 fichas estruturadas do PDF do desafio. Passos dependentes de manual ou de material ausente são bloqueados para transferência.
- `src/lib/ai.ts`: classificação de “Outro problema” pelo OpenRouter, quando habilitada.
- `src/lib/rag.ts`: busca no namespace do modelo e resposta com fonte. Sem trecho adequado, não responde.
- `src/lib/db.ts`: sessões, casos e fila simulada em SQLite.
- `src/app/api/chat`: API da conversa; `/api/painel/*`: fila e indicadores.

O navegador mantém apenas o ID da sessão no `localStorage`. Durante a conversa, o banco guarda o estado e mensagens do **bot**, não o texto livre digitado pelo consumidor; respostas dinâmicas do manual são substituídas por um marcador ao persistir. Ao encerrar ou transferir, o histórico temporário é apagado e resta só a mensagem final na sessão. O mini-relatório tem resumo determinístico por padrão e pode receber um resumo de IA a partir de códigos estruturados, sem relato literal do usuário. O histórico visual das mensagens do usuário desaparece após recarregar a página.

## Métricas

O painel separa resolução autodeclarada, transferência pendente e abandono. **Taxa de resolução entre casos concluídos** = resoluções autodeclaradas ÷ (resoluções autodeclaradas + transferências). Abandono é mostrado separadamente. Também aparecem duração média, camada final, problemas por modelo, abandono por ficha e passo e transferências por dia no horário de Brasília. Transferência significa que um item entrou na fila simulada; não confirma atendimento ou solução por pessoa. A métrica não prova deflexão de chamados sem comparação com uma linha de base real.

Custo estimado de IA = `(tokens_entrada × LLM_INPUT_USD_PER_M + tokens_saida × LLM_OUTPUT_USD_PER_M) / 1.000.000`. Preencha as tarifas do modelo escolhido no `.env.local`; os valores padrão são zero e não representam gratuidade real. O custo por resolução divide esse total pelas resoluções autodeclaradas e é apenas uma aproximação.

## Limites e próximos passos

- Esta é uma **interface web que simula a etapa de WhatsApp**. Não existe número, webhook nem atendimento humano real. O motor foi separado do canal para permitir um adaptador oficial depois.
- As instruções das fichas foram transcritas do fluxo interno, que não comprova aplicabilidade idêntica aos cinco modelos. Validar cada procedimento com os manuais e com Customer Success antes de uso público. As fichas 05, 06, 08, 09, 10 e 12 incluem pontos bloqueados; outras também podem exigir revisão.
- A “resposta de e-mail 37” da ficha 10 não foi fornecida. O bot encaminha o caso em vez de improvisar.
- As chaves de IA, manuais e links de vídeo ainda precisam ser fornecidos. Confirme o termo de confidencialidade antes de enviar material interno a serviços externos. O código envia ao Pinecone apenas manuais públicos e ao OpenRouter apenas a pergunta e trechos dos manuais no RAG; a classificação envia o relato do usuário quando ativada.
- Em produção, substituir a senha Basic e o SQLite por autenticação e armazenamento corporativos, definir retenção e consentimento, validar segurança de conteúdo e integrar o canal WhatsApp e o atendimento humano.

O estado do trabalho para continuar em outra sessão está em `docs/PROJETO.md`.
