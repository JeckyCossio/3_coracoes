# Hackathon 3corações — Base de conhecimento consolidada

> **Evento:** Cafeína Week 2026 — Hackathon — **"Explore Novos Mundos"**  
> **Organização apresentada:** 3corações / Cafeína Hub  
> **Versão desta base:** 0.6 — 32 fotografias válidas + seis documentos HTML oficiais + Mapa da Jornada de Atendimento (PDF de 10 páginas); prioridade ao Desafio 03  
> **Atualização:** 13/10/2026  
> **Situação:** **documento parcial, em construção**. Novas fotografias e anotações serão incorporadas a **este mesmo arquivo**, sem criar bases fragmentadas.  
> **Escopo desta versão:** **32 fotografias válidas em quatro lotes** (slides **04–08 e 10–28**), **seis documentos HTML oficiais** (abertura e briefings dos cinco desafios) e **o PDF completo “Mapa da Jornada de Atendimento”, com 10 páginas e 13 fichas**. Os dois HTMLs reenviados com sufixos no nome foram revistos nesta atualização, sem contá-los como novas fontes independentes. O slide **09** ainda não foi recebido; o slide 19 foi fotografado em duas etapas. **Desafio 03 é a responsabilidade do participante e tem prioridade de análise.**  
> **Importante:** o primeiro lote enviado pelo participante foi explicitamente invalidado e está excluído desta base. Embora alguns conteúdos possam se repetir, somente as fotografias reenviadas e confirmadas como corretas sustentam esta versão.

---

## 0. Como interpretar e utilizar esta base

Esta base foi preparada para ser inserida nas **Sources** do projeto ChatGPT sobre o Hackathon da 3corações. Seu propósito é oferecer contexto rastreável para esclarecer dúvidas, desenvolver hipóteses, formular *issue trees*, pesquisar soluções, avaliar propostas e estruturar um projeto competitivo.

### 0.1. Classes de informação

- **[FATO — SLIDE]:** declaração, número, nome ou orientação expressamente apresentados nas fotografias da apresentação. Representa o conteúdo do slide, não uma verificação independente do mundo externo.
- **[OFICIAL — HTML]:** declaração presente nos seis documentos HTML fornecidos como materiais oficiais; quando o texto traz marca de rascunho ou sugestão, preservar esta qualificação.
- **[OFICIAL — PDF]:** informação lida diretamente nas dez páginas do Mapa da Jornada de Atendimento, com identificação da página e da ficha. Procedimento registrado no PDF não equivale a autorização de uso indiscriminado em todos os modelos.
- **[SUGESTÃO DO BRIEFING]:** pista de implementação apresentada pelos organizadores, não obrigação de arquitetura.
- **[INTERPRETAÇÃO]:** implicação razoável dos fatos apresentados, mas que não foi dita explicitamente pela organização.
- **[HIPÓTESE]:** possibilidade a ser investigada; **não** deve ser tratada como requisito nem como problema confirmado.
- **[PENDENTE]:** ponto ainda não esclarecido pelo conjunto atual de **slides e HTMLs**; requer documentação complementar ou validação com organizadores.

### 0.2. Regras para consultas futuras no projeto

1. Priorizar os **fatos originais** sobre interpretações.
2. Não inventar desafio, público-alvo específico, métricas de sucesso, restrições técnicas, critérios de julgamento, datas ou recursos ainda não divulgados.
3. Em afirmações importantes, informar o **slide e a fotografia** de origem.
4. Distinguir **ganhos estimados** de resultados efetivamente realizados ou comprovados.
5. Conservar as datas e os números no contexto em que foram apresentados: especialmente 2022, 2023, 2024 e 2025/2026.
6. Se surgirem divergências em novos materiais, preservar a divergência e registrar as duas fontes até ser possível esclarecê-la.
7. Os cinco enunciados gerais estão no slide 19. Os slides 25–28 detalham desafios 01–02. **A partir da versão 0.5, os seis HTMLs oficiais incluem briefings de todos os cinco desafios e critérios ponderados de avaliação**. O **Desafio 03** possui seção prioritária detalhada e links aos manuais/fluxo; **o PDF da jornada já foi lido integralmente, mas os manuais por modelo, links externos e outros documentos referenciados ainda estão pendentes**.
8. Distinguir **ferramenta oficial** de obrigação de uso exclusivo: os slides mostram o **Kiro (AWS)** como ferramenta oficial, mas não estabelecem proibição de outras ferramentas.
9. Informações deste arquivo refletem **o que os slides dizem**, e não uma validação externa de resultados empresariais, aquisições ou premiações.

---

## FOCO PRIORITÁRIO — DESAFIO 03: AUTOATENDIMENTO TRES

> **Prioridade do projeto:** o participante informou que está encarregado do **Desafio 03 — Autoatendimento TRES**, pertencente à área de **Customer Success**. As análises, pesquisas, decisões de produto, planejamento de MVP, prototipação e pitch devem partir **deste desafio**, salvo pedido expresso em contrário. Os desafios 01, 02, 04 e 05 continuam registrados apenas como contexto e referência.  
> **Fontes oficiais:** `autoatendimento-tres (5).html` (mapa do tesouro, oito paradas) e `Abertura_Hackathon_Cafeina_Week_2026 (16).html` (apresentação de abertura e enunciado oficial). As duas fontes foram fornecidas pelo participante.  
> **Novo documento primário lido na v0.6:** `fluxo(1).pdf` (10 páginas). Ver **F11** para a transcrição estruturada das 13 fichas completas; a fonte não diferencia o passo a passo por máquina.  
> **Atenção aos tipos de afirmação:** `[OFICIAL — HTML]` é afirmação contida no material oficial; `[SUGESTÃO DO BRIEFING]` é pista de solução dada pela organização, não imposição de arquitetura; `[HIPÓTESE DE EQUIPE]` é recomendação analítica ainda não validada; `[PENDENTE]` exige confirmação. Links de materiais externos são **referências informadas pelo HTML, não documentos adicionais analisados**.

### F1. Enunciado oficial, intenção e limites

**[OFICIAL — ABERTURA, seção “Desafio 03 · Customer Success”] Pergunta-desafio efetivamente apresentada:**

> **Como dar autonomia ao consumidor e reduzir chamados técnicos desnecessários, mantendo o suporte humano para os casos que realmente precisam dele?**

**[OFICIAL — MAPA DO TESOURO, abertura e “Pergunta-guia”]** A missão é construir uma jornada de autoatendimento para o consumidor da marca **TRES**, ajudando-o a resolver por conta própria problemas simples de uso ou limpeza e fazendo o transbordo para atendimento humano quando realmente necessário. O arquivo do desafio traz uma *pergunta-guia* semelhante — “Como ajudar o consumidor TRES a resolver sozinho, de forma simples e rápida, o que não é defeito, e levar ao atendimento humano só o que realmente precisa dele?” — mas **essa pergunta está expressamente marcada “Rascunho · substituir pela pergunta-guia oficial”**. Por isso, usar a pergunta da apresentação de abertura como enunciado oficial; a versão do mapa serve como contexto, não como substituição.

**[OFICIAL — HTML] Área proponente:** Customer Success (CS). Cinco modelos **incluídos**: **LOV, Modo, Passione, Luna e Touch**. **Modelo excluído:** **Mimo**. Há duas equipes para esse mesmo desafio; ambas recebem o mesmo mapa, dados e acesso aos mentores.

**[OFICIAL — HTML] Problema quantitativo principal:** **mais de 70% dos chamados técnicos das máquinas TRES são classificados como “falsos defeitos”**. A fonte do levantamento mencionada no mapa é o painel **“Histórico de Reclamações” do Customer Success TRES**. “Falso defeito” significa ocorrência que, na avaliação do atendimento, não era defeito mecânico, mas exigia limpeza simples ou esclarecimento de uso. **Atenção à base de cálculo:** esse percentual se refere aos *chamados técnicos* e **não** a todas as máquinas, todos os consumidores, todas as interações, nem ao percentual comprovadamente evitável pela solução. O material não informa período, valores absolutos, custo por chamado, taxa de conclusão ou meta contratual de deflexão.

**[OFICIAL — HTML] Exemplos de “parece defeito”:** alerta vermelho piscando (verificar abastecimento e tecla azul), bico entupido (retrolavagem e nova extração no fluxo correspondente), alavanca que não fecha (verificar/limpar porta-cápsulas). **Essas são ilustrações de fluxos**, e não autorização para executar qualquer procedimento indistintamente em todos os modelos: consultar o manual exato antes de orientar um consumidor real.

### F2. Organização e personas — quem sofre, quem resolve

**[OFICIAL — HTML, parada 01]** CS foi dividido no briefing em: (a) *Processos e projetos*, que mapeia fluxos, propõe melhoria contínua e atua transversalmente; (b) *Relacionamento*, responsável por frentes especializadas e relacionamento duradouro; e (c) *Garantia de qualidade e produto*, onde nasce o problema de rápido tratamento de ocorrências e confiança do consumidor.

**[OFICIAL — HTML, parada 03; nomes fictícios]:**

| Persona | Situação real representada | Principal dor | Sucesso esperado |
|---|---|---|---|
| **Renata, consumidora TRES** | A máquina apresenta sinal estranho; o manual não está próximo; quer seu café naquele momento. | Frustração e esforço para encontrar ajuda; cada clique/passagem extra aumenta o atrito. | Resolver em poucos passos sem telefonar. |
| **Bruno, atendente de CS** | Consulta manuais e segue respostas predefinidas para orientar consumidores. | Muitas interações humanas gastas com limpeza e dúvidas simples. | Reservar tempo para casos que realmente precisam de uma pessoa. |

**[INTERPRETAÇÃO]** Existem **dois usuários importantes**: quem tenta se recuperar de uma falha em casa e quem recebe o chamado que não pôde ser resolvido. A experiência de escalonamento/handoff deve preservar o que o consumidor já informou, se houver autorização e viabilidade técnica.

### F3. Fluxo atual (*as is*) e quatro gargalos declarados

**[OFICIAL — HTML, parada 04]:**

1. **Problema em casa:** consumidor percebe falha e não encontra facilmente o manual no local de uso — dor “sem ajuda à mão”.
2. **Abertura de chamado:** dúvida simples ou limpeza transforma-se em ocorrência técnica — dor “a dúvida vira ocorrência”.
3. **Intervenção do atendente:** uma pessoa atende e orienta por manual e por um fluxo de **13 problemas**, ainda que a solução seja simples — dor “tempo gasto no que é simples”.
4. **Resultado:** a maior parte dos chamados técnicos é classificada como falso defeito — dor “logística e manutenção desnecessárias”.

**[OFICIAL — HTML] Ausência estrutural:** não existe atualmente **um canal único e padronizado de autoatendimento** que cubra os cinco modelos do desafio. O fluxo do atendente tem uma pergunta inicial (“Qual o problema identificado pelo consumidor?”), escolha de uma entre 13 fichas, instrução orientada àquela ficha e confirmação binária “O problema foi solucionado?”. Se **sim**, encerra, tira dúvidas e solicita avaliação; se **não**, encaminha à assistência técnica e solicita avaliação. **Não afirmar que inexiste conteúdo online**: a Central de Ajuda TRES já possui guias, FAQs e vídeos; falta uma jornada integrada/padronizada conforme o desafio.

### F4. As 13 categorias do fluxo oficial — para usar como base de conhecimento

**[OFICIAL — HTML, parada 04, resumos das fichas 01–13]** A tabela a seguir resume **o HTML do briefing**. **As instruções completas do PDF de 10 páginas, lido nesta versão, estão agora na seção F11** e ampliam esses resumos. Nenhuma das duas fontes substitui o manual específico por modelo ou a validação de segurança pela equipe de negócio.

| Nº | Problema identificado no fluxo | Resumo da instrução do briefing |
|---:|---|---|
| **01** | Máquina não está ligando | Ligar diretamente na tomada, sem adaptadores/filtros/estabilizadores; testar outra tomada; conferir voltagem correta. |
| **02** | Luz vermelha fixa | Ligar e aguardar as teclas pararem de piscar; se o alerta continuar, experimentar outra tomada da mesma voltagem. |
| **03** | Alerta vermelho piscando | Conferir água no reservatório; preencher até máximo, acionar tecla azul e aguardar o término da passagem de água. |
| **04** | Teclas das xícaras e sensor vermelho piscando | Fazer passagem de água completa; o material menciona como causa provável reset sem a passagem de água. |
| **05** | Luz amarela acesa | O material descreve um procedimento específico para zerar contador, envolvendo botão lateral, alavanca e teclas azul/verde até três bips; conferir manual e compatibilidade do modelo antes de orientar execução. |
| **06** | **Não extrai bebidas** | Verificar alerta de reservatório, testar outras cápsulas e procedimento de reset/duas passagens de água (preferencialmente com cápsula de retrolavagem), seguido de nova extração. **Marcado como “Top motivo”.** |
| **07** | Bebida aguada | Verificar tecla/cor indicada na cápsula e volume extraído. |
| **08** | Bebida fria | Material indica reset, ajuste de temperatura e, se necessário, preaquecimento da xícara com passagem de água na tecla azul. |
| **09** | Alavanca travada | Material descreve orientação de liberação da alavanca, remoção de cápsula, reservatório com água e acionamento de tecla; **confirmar procedimento seguro no manual exato antes de orientar força/movimento mecânico**. |
| **10** | **Vazamento** | Distinguir vazamento externo/interno, avaliar resíduo no compartimento de cápsulas, investigar entupimento e superfície molhada; menciona **“resposta de e-mail 37”**, **não fornecida**. **Marcado “Top motivo”.** |
| **11** | **Não puxa água** | Verificar água e encaixe do reservatório; retirar/recolocar, acionar tecla azul, aguardar e, se necessário, repetir. **Marcado “Top motivo”.** |
| **12** | **Bico entupido** | Verificar se a bebida chegou à bandeja de descarte; se sim, retrolavagem **5 vezes** e nova tentativa de extração. **Marcado “Top motivo” e descrito como segundo motivo mais frequente.** |
| **13** | Alavanca não fecha com cápsula | Verificar se o porta-cápsulas está cheio e, se estiver, limpar. |

**[OFICIAL — HTML] Quatro motivos explicitamente sinalizados como “Top motivo”:** 06 Não extrai bebidas, 10 Vazamento, 11 Não puxa água e 12 Bico entupido. O briefing afirma que os quatro motivos mais comuns aparecem entre os 13 e que **“Bico entupido” é o segundo motivo mais frequente**. Não há números absolutos ou porcentagens por motivo fornecidos no texto recuperado. Não inventar ranking dos demais motivos. O material informa que o painel de Histórico de Reclamações contém **volumetria por modelo e por motivo**, mas não fornece, em texto, uma série numérica reutilizável.

**[OFICIAL — HTML] Ficha 12 em quatro passos:** (1) identificar “bico entupido”; (2) verificar bebida na bandeja, realizar cinco retrolavagens se aplicável e tentar extração; (3) perguntar se resolveu; (4) se sim, encerrar/tirar dúvidas/pedir avaliação; se não, encaminhar à assistência técnica e pedir avaliação.

**[ATUALIZADO — v0.6]** O **PDF original de 10 páginas já foi examinado visualmente** e suas 13 fichas foram incorporadas em **F11**. **[PENDENTE]** Permanecem os manuais/guias específicos de cada modelo e a validação de segurança, especialmente para comandos de reset, retrolavagem, ajustes e manuseio mecânico.

### F5. Cinco dores da jornada e pistas fornecidas pelos organizadores

**[OFICIAL — HTML, parada 05, seção “Pistas, não receita”]** Os organizadores explicitamente apresentam possibilidades de solução sem definir uma arquitetura mandatória.

| Camada/etapa | Dor identificada | Pergunta de produto | Pista do briefing (não obrigação) |
|---|---|---|---|
| **1. Descobrir o modelo** | O manual não está à mão. | Como achar ajuda correta em segundos? | Landing page com busca por modelo. |
| **2. Resolver o comum** | Dúvidas simples viram chamados técnicos. | Como resolver sozinho os falsos defeitos comuns? | Guia dos problemas com respectivas instruções. |
| **3. Perguntar à IA** | Fora do fluxo simples, a única saída é falar com uma pessoa. | Como responder fora do guia com base no manual? | Chatbot fundamentado nos manuais. |
| **4. Falar com alguém** | Casos simples consomem atendimento humano. | Como acionar uma pessoa somente quando necessário? | **Simular** o encaminhamento ao suporte humano. |
| **5. Medir o resultado** | Falta visão integrada de cada camada de atendimento. | Em qual camada a dúvida foi resolvida? | Registrar resolução por camada e estimar deflexão. |

**[OFICIAL — HTML] “Tempero especial — IA sustentável”:** a proposta deve mostrar como evitar custo alto e conversa repetitiva, respondendo três perguntas: **quando a IA entra, como reaproveitar respostas repetidas e quanto custa cada dúvida resolvida**. **Não confundir isso com obrigação de usar LLM para cada pergunta**; o documento estimula eficiência.

**[HIPÓTESE DE EQUIPE — desenho sugerido para investigação, não solução definida]:** primeiro identificar modelo e oferecer passos oficiais de alto volume, acionando busca/IA apenas quando o fluxo guiado for insuficiente. Reutilizar respostas verificadas, impor limites de mensagens e evitar que um modelo invente instruções para máquina errada. Encaminhar quando não houver resposta segura, não houver resolução ou quando sinais de risco forem relatados. Ao transferir, preservar contexto para evitar repetição. Esse desenho tem aderência aparente ao briefing, mas precisa de validação de mentores e de teste com usuários.

### F6. Materiais de referência e fontes — LINKS REPASSADOS PELO HTML

**[OFICIAL — HTML, paradas 06 e 08]** O desafio indica: (a) manual de instruções + guia rápido de **cada um dos cinco modelos**; (b) **Mapa da Jornada de Atendimento**, PDF com 10 páginas e 13 fichas; (c) **Central de Ajuda TRES**, que já oferece guias rápidos, vídeos de limpeza, vídeos de reparos simples (luzes, teclas, água, alavanca, volume de extração), perguntas frequentes e caminho para solicitar assistência técnica.

**URLs citadas nos elementos de link dos documentos oficiais — não abertas nem verificadas nesta etapa:**

- **Mapa da Jornada de Atendimento (PDF, 10 páginas):** https://drive.google.com/file/d/15hXPWiuEDmxdf-xmJD2oVFXOYoslUxZr/view?usp=sharing
- **Site TRES:** https://www.escolhatres.com.br/
- **Central de Ajuda TRES:** https://www.escolhatres.com.br/central-de-ajuda/
- **Modelo LOV:** https://www.escolhatres.com.br/produto/maquinas/lov/
- **Modelo Modo:** https://www.escolhatres.com.br/produto/maquinas/modo/
- **Modelo Passione:** https://www.escolhatres.com.br/produto/maquinas/passione/
- **Modelo Luna:** https://www.escolhatres.com.br/produto/maquinas/luna/
- **Modelo Touch:** https://www.escolhatres.com.br/produto/maquinas/touch/

**[ATUALIZADO — v0.6]** O **PDF “Mapa da Jornada de Atendimento” foi fornecido e analisado integralmente** (ver F11). **[PENDENTE]** Os **manuais individuais dos cinco modelos e demais documentos externos** não foram fornecidos para análise. Não afirmar que uma ficha serve indistintamente a todos os modelos. Validar fonte, versão, segurança e diferenças operacionais com a equipe TRES antes de publicação real. A “resposta de e-mail 37” (ficha 10) segue indisponível.

### F7. Entregáveis oficiais do Desafio 03

**[OFICIAL — HTML, parada 07] A equipe deve apresentar quatro coisas:**

1. **Protótipo funcional**, operando com **os manuais e o fluxo de atendimento fornecidos**.
2. **Jornada ponta a ponta**, demonstrando um problema real desde a escolha/busca do modelo até sua resolução **ou** transbordo para uma pessoa.
3. **Pitch de 5 minutos** explicando o problema, a solução, **como a deflexão de chamados é medida** e **o que falta para evoluir para uma POC** (prova de conceito) na 3corações. A apresentação geral do evento prevê **3 minutos adicionais de perguntas**.
4. **Código, README e especificações**, ensinando como executar o protótipo e explicitando **premissas relacionadas aos manuais e à medição**.

**[OFICIAL — HTML, parada 07; referência interna ao regulamento, art. 27] Critérios divulgados:**

| Critério | Peso | O que a banca avalia segundo o briefing |
|---|---:|---|
| **Aderência ao desafio** | **25%** | Resposta ao problema central e respeito ao contexto. |
| **Impacto no negócio e no usuário** | **25%** | Relevância e potencial de benefício mensurável. |
| **Criatividade e diferenciação** | **20%** | Originalidade da abordagem ou combinação de soluções. |
| **Viabilidade** | **20%** | Coerência técnica, operacional e econômica para evoluir. |
| **Protótipo e comunicação** | **10%** | Qualidade da demo, clareza das decisões e apresentação. |

A distribuição acima soma **100%**. É informação expressamente fornecida no HTML; o **regulamento integral** e regras de desempate não foram anexados. A apresentação inicial ainda salienta: **“Demonstração vale mais que slide”**; esse conselho não altera os pesos formais.

### F8. Medição de valor — distinção entre requisito e proposta analítica

**[OFICIAL — HTML]** É necessário registrar **em qual camada** cada dúvida foi resolvida e explicar **como a solução mede deflexão**. O material não entrega uma fórmula oficial nem estabelece meta numérica.

**[HIPÓTESE DE EQUIPE — definir e validar com a 3corações]:** modelar cada sessão com `session_id` anônimo, `modelo`, `problema_normalizado`, `camada_utilizada` (guia/IA/humano), `resultado` (resolvido/não resolvido/desistiu), `confirmacao_usuario`, `transbordo`, `motivo_transbordo`, `tempo_para_resolver`, `custo_estimado`, `versao_da_fonte`, `status_validacao`. Manter registro mínimo e sem dados pessoais desnecessários.

- **Sessões resolvidas no autoatendimento:** sessões com **confirmação** de resolução no guia ou assistente e sem transbordo naquela sessão; isso é um **proxy**, não prova de que um chamado teria sido aberto.
- **Taxa de resolução autodeclarada:** `sessões com resolução confirmada no autoatendimento / sessões elegíveis concluídas` (definir claramente elegibilidade e abandono).
- **Taxa de transbordo:** `sessões encaminhadas ao humano / sessões elegíveis`.
- **Deflexão de chamados validada:** idealmente requer comparar comportamento e volume de chamados com linha de base ou grupo de controle, evitando contar cada acesso à FAQ como chamado evitado. **Este método é uma recomendação analítica, não uma métrica oficial estabelecida.**
- **Custo unitário por resolução:** custos operacionais totais atribuíveis à camada / número de resoluções confirmadas; separar custo de LLM, infraestrutura, conteúdo e atendimento humano; simulações exigem declarar premissas.
- **Segurança e qualidade:** incidência de respostas sem fonte; instruções incompatíveis com modelo; abandono; recontato; escalonamentos inadequados.

**[PENDENTE — perguntas ao CS/mentores]:** período e denominador dos “70%+”; quantidade mensal de chamados por modelo/motivo; taxas atuais de resolução por telefone e assistência; custos e tempo médio por caso; se “chamado técnico” é aberto na ligação ou após triagem; definição oficial de deflexão; documentação interna adicional disponível; dados de acessos à central; regras de integração e consentimento; quando a assistência técnica é obrigatória; procedimentos que não podem ser sugeridos por IA; acesso à ficha completa de vazamento / “e-mail 37”.

### F9. Recorte do MVP e demonstração — hipótese de equipe, não demanda fechada

**[HIPÓTESE DE EQUIPE]** Para conciliar prazo de dois dias, caso de ponta a ponta e IA sustentável, uma primeira demonstração poderia incluir **seleção de um modelo TRES → escolha de uma das ocorrências frequentes → fluxo visual, fundamentado nas fichas oficiais daquele modelo → confirmação de resolução → registro da camada e indicador de resultado**. Uma segunda trilha demonstraria **pergunta não coberta → resposta com fonte recuperada do manual ou recusa segura → transbordo simulado com resumo estruturado da tentativa**. Isso ilustra tanto a economia de atendimento quanto o limite seguro da automação.

**[HIPÓTESE DE EQUIPE]** Testar pelo menos os quatro motivos destacados (06, 10, 11, 12) e uma situação que **não** seja resolvida, sempre respeitando instruções validadas por modelo. Não alegar economia monetária comprovada sem baseline. Priorizar mostrar a solução rodando com material oficial e rastreabilidade das respostas, em vez de animações sem função.

**[PENDENTE]** A decisão de produto, a arquitetura tecnológica definitiva, as permissões de uso de serviços externos, os manuais por modelo e os fluxos de escalonamento reais precisam ser acordados com a equipe/mentores. O briefing exige Kiro como **ferramenta oficial**; os HTMLs não estabelecem exclusividade tecnológica nem uma pilha obrigatória para o aplicativo.

### F10. Glossário relevante para consultas posteriores

- **Customer Success (CS):** área de atendimento/experiência do consumidor.
- **Chamado técnico:** registro feito em função de relato de problema em máquina.
- **Falso defeito:** chamado que decorreu de limpeza/dúvida de uso, sem defeito técnico confirmado.
- **Autoatendimento:** resolução sem falar com atendente.
- **Transbordo:** transferência da jornada digital para atendimento humano.
- **Deflexão:** chamados potencialmente evitados porque o consumidor resolveu sozinho; validar como será contabilizada.
- **Camada de atendimento:** guia, chatbot e humano, conforme desenho sugerido.
- **Passagem de água:** ciclo sem cápsula.
- **Porta-cápsulas:** recipiente que acumula cápsulas usadas.
- **YTD:** acumulado desde o início do ano até a data.
- **POC:** prova de conceito pós-hackathon, se houver continuação.
- **Kiro:** ferramenta AWS apontada como oficial para prototipação.

### F11. Documento primário integral: Mapa da Jornada de Atendimento (PDF de 10 páginas)

> **[OFICIAL — PDF, `fluxo(1).pdf`, páginas 1–10]** Novo material diretamente examinado na versão 0.6. Título interno: **“Mapa da Jornada de Atendimento — Diagnóstico da máquina”**. Contém o mapa de 13 ocorrências, fichas de orientação ao consumidor e capturas das quatro telas do formulário. **Esta seção registra todas as instruções e observações efetivamente presentes no PDF**; a seção F4 é um índice sintético oriundo do HTML. O documento apresenta o fluxo operacional de atendimento, **não** a comprovação de que cada instrução seja aplicável, sem adaptação, aos cinco modelos da TRES.

#### F11.1. Macrofluxo documentado (páginas 1, 9 e 10)

**[OFICIAL — PDF]** O título da página 1 esclarece: **“13 problemas possíveis, o mesmo fluxo para todos: muda apenas a instrução da tela do problema.”** A decisão inicial parte do **problema percebido e relatado pelo consumidor**, não de uma árvore de perguntas automática que descubra autonomamente a causa.

1. **Início / Tela 1 — Pergunta inicial.** Apresentar ao atendente a questão **“Pergunte qual o problema identificado pelo consumidor...”**. O material orienta entender o que está acontecendo com a máquina antes de avaliar a causa. Seleciona-se **uma das 13 opções** do formulário.
2. **Tela da ocorrência — Instrução ao consumidor.** O formulário abre uma tela correspondente à opção marcada, com as perguntas/orientações daquela ficha e a pergunta de confirmação **“O problema foi solucionado?”**, respondida com **Sim / Não**.
3. **Se SIM — Tela 3: Solução do Problema.** Informar que o problema foi identificado, encerrar o atendimento, verificar se existe dúvida complementar e **solicitar avaliação final**.
4. **Se NÃO — Tela 4: Necessidade de Suporte Técnico.** Informar que não foi possível resolver naquele atendimento, orientar assistência técnica **conforme o “Mapa de Atendimento”** mencionado na própria tela e **solicitar avaliação final**.

**[OFICIAL — PDF]** O caminho **Sim/Não** é igual em todas as 13 fichas. As páginas 9–10 mostram o aspecto e o texto do formulário, inclusive as 13 alternativas de seleção e as telas finais. Não aparece no PDF uma API, canal digital de transbordo, identificação automática de modelo, autenticação de consumidor, captura de eventos analíticos, telemetria nem uma regra de encaminhamento detalhada para atendimento humano; **não atribuir a existência desses componentes à 3corações com base neste material**.

#### F11.2. Fichas operacionais completas — agrupadas por página

**Ficha 01 — Máquina não está ligando (página 2)**

1. Questionar se a máquina está ligada **diretamente na tomada**, sem adaptadores, transformadores, filtros de linha ou estabilizadores.
2. Orientar o consumidor a experimentar uma **tomada diferente**.
3. Questionar se o equipamento está ligado à **voltagem correta**.

**Ficha 02 — Luz vermelha fixa (página 2)**

1. Solicitar que o consumidor ligue a máquina e **aguarde as teclas pararem de piscar**.
2. Caso o alerta vermelho se acenda de maneira fixa, orientar conexão a **outra tomada da mesma voltagem**.

**Ficha 03 — Alerta vermelho piscando (página 3)**

1. Pedir que o consumidor verifique se o **reservatório de água está abastecido**.
2. Se não estiver, pedir para completar a água **até o nível máximo** e pressionar a **tecla azul**.
3. Aguardar até que a **passagem de água termine sozinha**.

**Ficha 04 — Teclas das xícaras (amarela, azul e verde) e sensor vermelho piscando (página 3)**

1. Orientar o consumidor a executar **uma passagem de água**.
2. Aguardar que o processo **termine sozinho**.

**Observação do PDF:** possivelmente houve um *reset*, mas **a passagem de água não foi concluída**. A palavra “possivelmente” indica explicação provável, não diagnóstico comprovado.

**Ficha 05 — Luz amarela acesa (página 4)**

O PDF orienta **zerar o contador volumétrico** pelo procedimento abaixo:

1. Desligar a máquina no botão lateral e **levantar a alavanca**.
2. Pressionar e manter pressionadas as teclas das xícaras **azul e verde**; simultaneamente, ligar a máquina **sem soltar essas teclas**.
3. Aguardar a máquina emitir **três bipes sequenciais**.
4. Desligar a máquina e **abaixar a alavanca**.
5. Ligar novamente a máquina.

**Observação do PDF:** o *reset* também pode ser usado para desativar o alerta, pois zera o contador volumétrico. **Cuidado de implementação:** por alterar um estado da máquina, exige verificação do procedimento e dos modelos compatíveis antes de ser apresentado em produção como instrução genérica.

**Ficha 06 — Não extrai bebidas (página 4)** — **um dos quatro “Top motivos” segundo o HTML OF-03**, não segundo ranking numérico do PDF.

1. Questionar se o **alerta vermelho** acende durante o processo (**o reservatório de água deve estar cheio**).
2. Perguntar se o problema ocorreu **com outras cápsulas**.
3. Orientar *reset* e **duas passagens de água**, preferencialmente com **cápsula de retrolavagem**.
4. Repetir o teste com **uma cápsula de bebida**.

**Lacuna:** a ficha não descreve o modo de executar o *reset* em cada modelo.

**Ficha 07 — Bebida aguada (página 5)**

1. Perguntar se o **botão de extração pressionado** corresponde à **cor indicada na cápsula**.
2. Se não corresponder, orientar a escolha da cor correta para o **tipo de bebida**.
3. Verificar se o **volume extraído** está dentro do padrão.

**Lacuna:** o PDF não informa tabela de volumes por bebida, tamanhos ou modelo.

**Ficha 08 — Bebida fria (página 5)**

1. Orientar *reset* da máquina e **aumento da temperatura para regular**.
2. Se necessário, orientar **preaquecimento da xícara** com uma **passagem de água na tecla azul**.

**Lacuna:** não traz sequência de botões ou temperaturas por modelo para regular o aquecimento.

**Ficha 09 — Alavanca travada (página 6)**

1. Posicionar a máquina **de costas para a pessoa**.
2. Com uma mão, **segurar firmemente o corpo da máquina** e, com a outra, **puxar a alavanca para trás firmemente**.
3. Após liberar, **retirar a cápsula e fechar a alavanca**.
4. Ligar a máquina com **água acima da metade do reservatório**.
5. Acionar uma vez o **botão da xícara do meio**; segundo o PDF, a máquina liberará um pouco de água pelo bico e voltará ao funcionamento normal.

**[RESSALVA DE SEGURANÇA / RECOMENDAÇÃO]** Esta ficha contém força mecânica aplicada à máquina. **Não automatizar essa orientação indiscriminadamente**, especialmente sem identificar o modelo, checar as precauções do manual e validar com Customer Success/TRES. Essa ressalva é uma recomendação de segurança desta base, **não uma instrução adicional que conste na ficha**.

**Ficha 10 — Vazamento (página 6)** — **“Top motivo” no HTML OF-03**.

1. Perguntar se o vazamento é **externo ou interno**.
2. Se o relato se referir ao **resíduo de água no compartimento de cápsulas usadas**, orientar conforme a **“resposta de e-mail 37”**, citada no material, **mas não fornecida**.
3. Verificar se **não se trata de entupimento** e se a água chega a **molhar a superfície onde a máquina está apoiada**.

**[PENDENTE CRÍTICO]** Sem o conteúdo da **resposta de e-mail 37**, a ficha 10 **não oferece orientação completa** para o caso de resíduo no compartimento. O PDF também não fornece regras detalhadas de risco para vazamentos junto a componentes elétricos. Não inventar essa resposta nem orientar manipulações perigosas.

**Ficha 11 — Não puxa água (página 7)** — **“Top motivo” no HTML OF-03**.

1. Pedir que o consumidor verifique se o **reservatório está bem encaixado e contém água**.
2. Se não estiver, orientar **retirar e recolocar o reservatório**, acionar a **tecla azul** e aguardar a conclusão do funcionamento.
3. Se não houver resolução, **repetir o processo**.

**Ficha 12 — Bico entupido (página 7)** — **“Top motivo” e segundo motivo mais frequente segundo o HTML OF-03**.

1. Pedir que o consumidor verifique se a **bebida saiu na bandeja de descarte de cápsulas**.
2. **Se isso tiver acontecido**, orientar **cinco procedimentos de retrolavagem**.
3. Tentar novamente a **extração de uma bebida**.

**Nota de condição:** as cinco retrolavagens são apresentadas após a pergunta sobre a bebida na bandeja; não remover essa condição em respostas geradas. Confirmar o procedimento e a compatibilidade no manual do modelo.

**Ficha 13 — Alavanca não fecha com cápsula (página 8)**

1. Pedir que o consumidor verifique se o **porta-cápsulas está cheio**.
2. **Se estiver**, orientar a **limpeza do porta-cápsulas**.

**Lacuna:** o documento não traz passo específico para a hipótese de o porta-cápsulas estar vazio ou limpo; segue apenas a pergunta geral de resolução e eventual suporte técnico.

#### F11.3. Elementos das telas do formulário (páginas 9–10)

| Tela | Nome do material | Entrada e ação observável | Resultado esperado conforme PDF |
|---|---|---|---|
| **1** | Pergunta inicial | Um atendente escolhe **uma** das 13 opções indicadas pelo consumidor, após entender o relato. | Abre tela específica daquele problema. |
| **2** | Instrução do problema | Exibe o roteiro correspondente e pergunta **“O problema foi solucionado?” (Sim/Não)**. | Escolha do desfecho. |
| **3** | Solução do Problema | Rota do **Sim**. | Encerrar, responder dúvida complementar e pedir avaliação. |
| **4** | Necessidade de Suporte Técnico | Rota do **Não**. | Informar necessidade de assistência técnica conforme “Mapa de Atendimento” e pedir avaliação. |

**[OFICIAL — PDF]** As páginas 9 e 10 apresentam **capturas de telas de um formulário**, não um artefato demonstrado como aplicação pública disponível ou API reutilizável. O PDF não fornece URL de acesso ao formulário, código-fonte, integração ou regras de armazenamento de suas respostas.

#### F11.4. Cruzamento entre os três documentos examinados nesta atualização

| Afirmação | Fonte responsável | Grau de confirmação / limite |
|---|---|---|
| São **13 categorias operacionais** de suporte | **OF-FLUXO, p. 1–10** e **OF-03, parada 04** | Confirmado pelos dois materiais. |
| O fluxo atual termina em **resolução** ou **necessidade de suporte técnico** | **OF-FLUXO, p. 1 e 10** | Confirmado como desenho de atendimento, não como integração técnica implementada. |
| **Quatro “Top motivos”**: 06, 10, 11, 12; **bico entupido** é o segundo | **OF-03, parada 04** | Informação do **HTML**, não da planilha numérica nem de contagens no PDF. |
| **Mais de 70%** dos chamados técnicos são falsos defeitos | **OF-03, apresentação do problema** | Declaração oficial do briefing; sem denominador, período ou valores absolutos visíveis. |
| **LOV, Modo, Passione, Luna e Touch** incluídos; **Mimo excluído** | **OF-03, parada 02** | Confirmado para o escopo do desafio; PDF não mostra variantes específicas desses modelos. |
| Diagnóstico automático por IA, handoff real ou mensuração de deflexão já existem | **Nenhuma destas fontes** | **Não demonstrado**; são ideias de produto/entregáveis, não capacidades atuais confirmadas. |

#### F11.5. Lacunas concretas evidenciadas pelo PDF e perguntas de validação

**[PENDENTE]** Para transformar esse fluxo em autoatendimento seguro e demonstrável, ainda são necessários: (a) manuais e guias rápidos **dos cinco modelos**, incluindo como realizar *reset*, ajuste de temperatura, retrolavagem e possíveis diferenças de comandos; (b) a **resposta de e-mail 37**; (c) o **“Mapa de Atendimento”** mencionado nas telas de desfecho ou explicação do fluxo real de encaminhamento; (d) validação das condições em que orientar manipulação mecânica ou situações com água/eletricidade; (e) definição de métricas e de dados disponíveis para estimar deflexão; (f) confirmação do que o mentor considera **escalonamento obrigatório e seguro**.

**[INTERPRETAÇÃO]** O formulário fornecido classifica o problema **pelo relato inicial**, encaminha à ficha e tem uma única confirmação binária. Portanto, ao desenhar um produto novo, existe oportunidade de **reduzir o esforço de identificação do problema e esclarecer quando o consumidor deve parar e pedir ajuda**. Essa oportunidade é uma interpretação do material, **não é uma funcionalidade ou exigência imposta pelo PDF**.

**[RECOMENDAÇÃO]** Para qualquer MVP, manter **rastreamento `modelo → sintoma → ficha/página → orientação validada → resposta do consumidor → desfecho`**, e registrar a versão do conteúdo utilizado. Essa estrutura é sugestão de arquitetura e deve ser validada com os mentores.


---

## COMPLEMENTO DOS DOCUMENTOS OFICIAIS — DESAFIOS 01, 02, 04 E 05

> Estas seções ampliam as informações do slide 19 e dos slides 25–28. **Não substituem a prioridade do Desafio 03**. Fontes: `dna-da-maquina (4).html`, `pedido-sem-fronteiras (3).html`, `cora-vendas__1_ (1).html` e `cora-gestor__1_.html`. Todas indicam duas equipes com o mesmo briefing e mencionam a mesma matriz de critérios da seção F7.

### O1. Desafio 01 — DNA da Máquina (P&D TRES): complemento oficial

**[OFICIAL — HTML]** Problema: unir reclamação do consumidor, diagnóstico/conclusão do técnico e histórico de versões/melhorias para que P&D consiga observar padrões e demonstrar **antes e depois de uma melhoria**. O produto TRES oferece **mais de 37 opções** de bebidas em cápsulas (afirmação do material). Escopo específico: **G5 Passione e G4 Luna**, com **diretório de melhorias somente para G5 Passione**. Fatores relevantes:

- Três áreas: **Customer Success (ouve e registra), Pós-vendas (diagnostica/repara) e P&D (inova e lança alterações)**.
- Personas fictícias: **Marina**, engenheira P&D (usuária principal), **Carlos**, técnico de pós-vendas, **Rafael**, analista CS, e **Juliana**, consumidora. A diretoria aprova investimentos e precisa de provas de impacto.
- Sete dores apresentadas: rastreamento de versões; incerteza sobre eficácia; padrões invisíveis; ausência de correlação melhoria-impacto (**foco**); divergências reclamação/reparo; preparação manual de dados (**foco**); inexistência de histórico por máquina (**foco**).
- Dados: **Relatório de Reclamações 2025–2026** (G5 e G4; modelo, relato, motivo técnico, conclusão, data) e **Diretório de Melhorias G5 Passione** (versão antiga/nova e ano). Extrações do atendimento, **sem acesso direto ao Salesforce**, com textos livres/campos faltantes; segundo o briefing, dados reais **anonimizados**.
- Entregas: protótipo usando dados fornecidos; **caso completo de melhoria da G5 Passione** com comparação antes/depois; pitch de 5 min explicando evidências e evolução à POC; código, README e premissas. **Diferencial sugerido:** importar novos arquivos `.xlsx` e atualizar as análises.

**Link de base informado pelo documento oficial, não aberto nesta consolidação:** https://docs.google.com/spreadsheets/d/1FKaswM6r67OatQGozlG0k3dnL6niNk6C/edit?usp=sharing

### O2. Desafio 02 — Pedido sem Fronteiras (Internacionalização): complemento oficial

**[OFICIAL — HTML]** O time de Internacionalização expande mercados, especialmente Mercosul, buscando receita e rentabilidade. Acompanha **volume de vendas, receita de exportação, margem EBITDA, países/canais ativos e nível de serviço**. Portfólio citado: café torrado e moído, solúvel, grãos e cápsulas. A jornada deve levar do **distribuidor** até um **pedido validado e pronto para importar**, sem redigitação.

- Personas fictícias: **Martín**, comprador de distribuidor do Mercosul, que não visualiza ocupação durante o pedido; **Lucas**, analista de Exportação, que opera planilhas, cubagem e redigitação.
- Cinco etapas/demandas da jornada, apresentadas como **“pistas, não receita”**: **(1) catálogo/entrada padronizada**, **(2) validação imediata de quantidades, múltiplos e regras por país**, **(3) cálculo de peso, volume, pallets e ocupação**, **(4) confirmação do distribuidor com resumo**, **(5) arquivo final estruturado e trilha de auditoria**.
- Regras de paletização dependem de unidade **UN, CX, KG**, tamanho/embalagem, fracionamento/códigos de SKU e, em cenário alternativo, **carga estivada** sem pallet. Exemplo ilustrativo do material: **300 caixas / 81 caixas por pallet = 3,70 pallets**, peso líquido **960 kg**, cubagem **5,15 m³**; não generalizar este exemplo para demais SKUs.
- A planilha atual “Order Basis” usa **código do cliente para preços**, idioma, moeda (exemplo USD), Incoterms (exemplo FCA), tipo de embarque, totais e aviso “OK”/alerta. **Preços variam por país e cliente**. O SAP não é diretamente integrado à Order Basis; há digitação/importação manual de itens.
- Quatro planilhas indicadas: **Order Basis**, **Conferência de produtos**, **Materiais** (carga estivada) e **Registros** (preços). Há **recorte limitado** de marcas/produtos para o hackathon.
- Entregas: protótipo com dados/regras, pedido do catálogo ao preço específico e validação logística, pitch sobre dados e continuidade, código/README/premissas.

**Links oficiais informados (não abertos nesta consolidação):**

- Order Basis: https://docs.google.com/spreadsheets/d/1y5nKORbuA3Qurhunhtm1J98nPLLhNoCn/edit?usp=sharing
- Conferência de produtos: https://docs.google.com/spreadsheets/d/1IEBEKVi_gfD7m1OKCE6qmCjUh_EVAofk/edit?usp=sharing
- Materiais: https://docs.google.com/spreadsheets/d/1sXY2Vd7vB1DuuzQEoDvymQIzGwHV_zgL/edit?usp=drive_link
- Registros/preços: https://docs.google.com/spreadsheets/d/1N4ZeHAoRfcA7blu7dIoTosM4_SiqNyma/edit?usp=drive_link

### O3. Desafio 04 — CORA Vendas: complemento oficial

**[OFICIAL — HTML]** A **CORA** é ecossistema de agentes de IA do Grupo 3corações. O CORA Vendas opera em **WhatsApp**, em piloto, e responde de forma **determinística**: por volta das **6h**, envia um PDF/Insight do Dia com metas, quedas e clientes inativos, seguido de respostas pré-definidas. A proposta é **IA generativa** que transforme informação descritiva em rotina comercial, conversa e **Next Best Action** para o vendedor.

- Exemplo ilustrativo do briefing: **18 famílias com meta, 17 críticas, uma batida; faltam 70 UN de bebida vegetal**; exemplo de cliente inativo por 60+ dias. **Nomes e dados do exemplo são fictícios/ilustrativos**, não indicadores gerais da empresa.
- Persona fictícia **Rodrigo**, vendedor consultor em campo: visita pontos de venda, acompanha estoque, gôndola, preço, inadimplência, mix e oportunidades. O foco inicial da solução é **o PDF da manhã e a priorização do dia**, embora também exista uso durante a rota e no fim do dia.
- Três pilares expressamente esperados: **(1) inteligência preditiva/prescritiva** (scoring de recompra, oportunidades na rota), **(2) usabilidade de campo** (cards curtos, alertas, voz, interface rápida), **(3) integração e tratamento seguro dos dados** (Sirius/SAP simulados, chamadas de ferramentas, LLM e guardrails; **não inventar preços nem regras**).
- Dados: ambiente **Snowflake** que simula produção e fontes CORA, com **pasta de scripts no Drive**. O mapa sugere **1 ou 2 responsáveis por dados**, conta trial com **limite de US$ 100 por usuário**, importação de base/scripts e conexão do assistente aos dados.
- Entregas: copiloto conversacional sobre dados Snowflake; um dia de rota da leitura matinal à melhor ação em um cliente; pitch abordando salvaguardas e evolução; código, README, conectores, guardrails e premissas.

**Link de dados/scripts citado (não aberto):** https://drive.google.com/drive/folders/1_iLHhcfkryOS9TAU7-sr-NXbIqN6GqBX?usp=sharing

### O4. Desafio 05 — CORA Gestor: complemento oficial

**[OFICIAL — HTML]** Os gestores precisam navegar por **ERP/Sirius, BI e relatórios ad hoc** para diagnosticar metas e clientes; a CORA atual atende vendedores, não a liderança. O desafio é um **agente conversacional tático** com respostas precisas, contexto e permissões por nível.

- Quatro níveis comerciais: **Regional → Filial → Supervisor → Vendedor**. Personas fictícias: **Carla**, gerente de filial, e **Diego**, supervisor que acompanha **4 a 7 vendedores**.
- Principais dores: excesso de dashboards, análise hierárquica lenta e relatórios sem indicação de próximos passos.
- Quatro pilares obrigatórios no briefing: **(A) contexto e hierarquia**/alçada (RBAC), **(B) navegação conversacional** contextual entre macro/micro e retorno (*drill-down/roll-up*), **(C) prescrição** com relação entre faturamento, volume, cobertura, inativação e próximos passos, **(D) governança e números sem alucinação** usando chamada de ferramenta em vez da memória do modelo.
- Exemplos de indicadores: visitação planejada/realizada, positivação, pedidos, reversão de visitas e de clientes sem compra, novos clientes, inadimplentes; volume, cobertura, devoluções e cortes por família de produtos. Inativação, no contexto do documento, é **60+ dias sem compra**.
- Foco explícito do documento: **fazer o agente funcionar**, evitando criar outro portal/dashboards/login/ERP; demonstração deve ir de pergunta ampla a plano de ação, incluindo descida por níveis e retorno. **Nunca acessar dados de outra alçada**.
- Dados: base Snowflake simulando produção, scripts e pasta de desafio; trial com limite informado de US$ 100 por usuário, 1–2 responsáveis de dados. Entregas: agente, conversa de ponta a ponta, pitch sobre alçada/precisão/POC, código/README/especificações.

**Link de dados/scripts citado (não aberto):** https://drive.google.com/drive/folders/1_iLHhcfkryOS9TAU7-sr-NXbIqN6GqBX?usp=sharing

---

## FONTES OFICIAIS INCORPORADAS (HTML + PDF) E PRECEDÊNCIA

Os **seis HTMLs e o PDF da jornada** recebidos foram interpretados como **materiais oficiais fornecidos pelo participante**, sem validar seu conteúdo externamente. Nesta versão, os dois HTMLs reenviados de Abertura e Autoatendimento foram novamente examinados e o PDF da jornada foi inspecionado página a página. A abertura inclui **roteiro de fala, anotações do apresentador e marcas de edição**, que devem ser distinguidos de enunciados finais. As fontes documentais confirmam o conjunto de cinco desafios, duas equipes por desafio, protótipo/Kiro, entregáveis e matriz de avaliação, e atualizam lacunas da base fotográfica antiga.

| ID | Arquivo recebido | Uso principal nesta versão |
|---|---|---|
| **OF-ABERTURA** | `Abertura_Hackathon_Cafeina_Week_2026 (16).html` | Contexto, programação, fala do evento, **pergunta oficial do desafio 03**, regras e apresentação dos cinco desafios. |
| **OF-03** | `autoatendimento-tres (5).html` | **Fonte prioritária:** 70%+, cinco modelos, personas, processo atual, fichas 01–13, soluções sugeridas, referências, entregáveis e pesos de avaliação. |
| **OF-FLUXO** | `fluxo(1).pdf` (título interno: *Mapa da Jornada de Atendimento*, 10 páginas) | **Fonte operacional complementar prioritária:** todas as instruções das 13 fichas (pp. 2–8), mapa geral (p. 1), telas do formulário e desfechos (pp. 9–10); detalhamento integral em F11. |
| **OF-01** | `dna-da-maquina (4).html` | Dados da engenharia, G5/G4, histórico, dores/entregas e referências. |
| **OF-02** | `pedido-sem-fronteiras (3).html` | Processo de internacionalização, SKUs, pallets/cubagem, quatro planilhas e entregas. |
| **OF-04** | `cora-vendas__1_ (1).html` | PDFs diários, CORA, vendedores, três pilares, Snowflake e entregas. |
| **OF-05** | `cora-gestor__1_.html` | Hierarquia comercial, RBAC, quatro pilares, Snowflake e entregas. |

**Precedência para pesquisas futuras:** (1) enunciado confirmado da apresentação + briefing oficial do mesmo desafio; (2) **PDF operacional original para o texto detalhado das fichas e telas, ressalvado o manual específico de cada máquina quando for disponibilizado**; (3) slides fotografados no evento; (4) interpretações e hipóteses explicitamente rotuladas. Quando houver divergência, **citar ambas as fontes e identificar a pendência**, em vez de inventar conciliação. A expressão **“Rascunho · substituir pela pergunta-guia oficial”** consta em alguns HTMLs e não deve ser apagada: o enunciado efetivamente apresentado prevalece.

**Nota de confidencialidade:** o slide 21 da abertura informa que dados dos desafios são confidenciais conforme termo assinado. **Ter recebido os documentos não determina permissão de carregá-los em serviços externos ou de consultar bases privadas online.** Antes de acrescentar PDFs do Drive, dados reais ou transcrições internas às Sources, verificar o termo de confidencialidade, permissões e regras de uso de IA dos organizadores. Não compartilhar dados pessoais.



## 1. Contexto geral do evento

**[FATO — SLIDES 04–11]** A apresentação pertence à **Cafeína Week 2026**, inclui um **hackathon** e adota o mote **"Explore Novos Mundos"**. Os slides usam conjuntamente as marcas **Cafeína** e **3corações**.

**[FATO — SLIDE 08]** A edição 2026 da Cafeína Week inclui um hackathon **ao lado de FIAP e AWS**. Os slides **14–17** detalham atividades na FIAP, ferramenta oficial Kiro e suporte técnico AWS/FIAP.

**[FATO — SLIDES 14–18]** O evento ocorre em **13 e 14 de outubro de 2026** (terça e quarta-feira), na **FIAP**, reunindo **50 participantes**, **10 equipes de até cinco integrantes** e **cinco desafios de negócio** com dores reais da 3corações. A **entrega final está programada para 14/10 às 16h30**, com apresentações a partir de 17h, deliberação da banca e anúncio de vencedores.

**[ATUALIZAÇÃO — SLIDES 19–28 + SEIS HTMLs OFICIAIS]** Os cinco desafios aparecem no slide 19; os slides 25–28 detalham os desafios 01 e 02. Os **HTMLs recebidos depois** trazem os briefings completos dos cinco desafios, inclusive **Desafio 03 (foco do participante)**, e os critérios de julgamento (**25% aderência, 25% impacto, 20% criatividade, 20% viabilidade, 10% protótipo/comunicação**). Permanecem pendentes o regulamento completo, o canal exato de envio, as permissões técnicas, os **manuais dos modelos e outros documentos externos**, e o termo de confidencialidade. O **PDF da jornada de atendimento já foi incorporado em F11**.

### 1.1. Frase-guia da apresentação

> **"Nenhuma empresa explora novos mundos sozinha."**

**[FATO — SLIDE 05]** A frase aparece sob o título **"Por que estamos aqui"**, comunicando uma visão de inovação colaborativa.

**[INTERPRETAÇÃO]** O evento valoriza a participação de atores externos e a construção de conexões com o ecossistema de inovação. Isso é um sinal de posicionamento institucional, **não** um critério formal de julgamento conhecido.

---

## 2. O que é o Cafeína Hub

### 2.1. Definição oficial apresentada

**[FATO — SLIDE 04]** O slide pergunta **"Afinal, o que é o Cafeína?"** e faz uma distinção entre o produto café e o programa de inovação:

- **Na xícara:** "É o que acorda o Brasil todo dia."
- **Na 3corações:** o **Cafeína é o hub de inovação da empresa**. Desde **2022**, conecta a companhia a **startups, universidades, colaboradores e novos talentos**.

**[FATO — SLIDE 06]** O Cafeína é descrito como a **plataforma de inovação da 3corações**, em funcionamento desde 2022, com **"portas diferentes para públicos diferentes"**.

### 2.2. Propósito declarado

**[FATO — SLIDE 07]** Citação institucional da plataforma de inovação:

> "Queremos fazer negócios, solucionar problemas e alavancar oportunidades, mas, além disso, estamos aqui para criar laços legítimos e duradouros e propagar nossa visão de que o prazer está nas coisas simples."

O slide também apresenta os logotipos do Cafeína e da 3corações e a indicação **"Desde 2022"**.

**[INTERPRETAÇÃO]** A inovação é apresentada como instrumento para gerar negócios, solucionar problemas e abrir oportunidades, combinando retorno para a empresa com relacionamento duradouro. A frase **"o prazer está nas coisas simples"** expressa posicionamento cultural da marca.

### 2.3. As quatro portas/programas da plataforma

**[FATO — SLIDE 06]**

| Frente / programa | Público ou finalidade apresentada | Atividade descrita no slide |
|---|---|---|
| **Cafeína Open** | Ecossistema externo | Startups, universidades e centros de pesquisa propõem soluções para **desafios reais da empresa**. |
| **Cafeína Ideias** | Colaboradores | Colaboradores propõem e testam melhorias **na fábrica, na operação e nos processos**. |
| **Cafeína +Tech** | Empoderamento digital | Programa de **empoderamento digital da companhia**. O slide não detalha seu formato, trilhas ou ferramentas. |
| **Cafeína Week 2026 (CW 2026)** | Semana da inovação | Celebra a conexão com o ecossistema, a geração de ideias e a inovação na companhia; inclui **hackathon**. |

**[INTERPRETAÇÃO]** A companhia não trata inovação como uma única iniciativa: utiliza canais para resolução de desafios com parceiros externos, sugestões internas, capacitação digital e mobilização do ecossistema.

**[PENDENTE]** Não está confirmado se os cinco desafios deste hackathon estão formalmente associados ao **Cafeína Open** ou a outra frente da plataforma, embora todas apareçam na mesma apresentação.

---

## 3. Histórico e evolução do Cafeína Hub

A apresentação exibe uma linha do tempo denominada **"A jornada do Hub"**. O slide 08 foi fotografado **três vezes**, revelando gradualmente os anos 2022, 2023, 2024 e 2025/2026. As informações abaixo representam **um único slide consolidado**, não três eventos separados.

### 3.1. Novembro de 2022 — Lançamento e primeiro ciclo

**[FATO — SLIDE 08]**

- **Lançamento do Cafeína Hub.**
- **1º Ciclo de Desafios do Cafeína Open.**
- **Cafeína Week:** premiação do **1º Ciclo Cafeína Ideias Ceará**.
- Número destacado: **793 ideias no 1º ano do Cafeína Ideias**.

**Cuidado interpretativo:** as 793 ideias são atribuídas ao **primeiro ano** do programa; a apresentação posiciona a informação na seção 2022, mas isso não prova que todas foram submetidas dentro do ano civil de 2022.

### 3.2. 2023 — Expansão e reconhecimento

**[FATO — SLIDE 08]**

- **2º Ciclo de Desafios**.
- **Cafeína Week:** premiação do **2º Ciclo Cafeína Ideias**.
- **1ª aparição no Prêmio Valor Inovação:** **141º lugar** no ranking.
- Destaque financeiro: **R$ 1 milhão de ganhos estimados**.

**Cuidado interpretativo:** o slide não informa quais iniciativas compõem a cifra, como os ganhos foram calculados, se o valor é acumulado ou anual, nem se foi realizado financeiramente.

### 3.3. 2024 — Volume de startups, PoCs e ideias

**[FATO — SLIDE 08]**

- **439 startups inscritas em desafios**.
- **16 PoCs** (*proofs of concept*, ou provas de conceito) mencionadas.
- **3º ano do Cafeína Ideias:** **perto de 3 mil ideias**.
- **Prêmio Valor Inovação Brasil 2024:** **114º lugar** no ranking.
- **Prêmio Intraempreendedorismo 2024 — AEVO**.
- Destaque financeiro: **R$ 8 milhões de ganhos estimados**.

**Cuidado interpretativo:** não está estabelecido se as 16 PoCs correspondem exclusivamente às 439 startups, se chegaram à produção, nem qual foi a taxa de implementação. Tampouco é permitido concluir que o valor de R$ 8 milhões representa acréscimo líquido sobre o R$ 1 milhão exibido para 2023.

### 3.4. 2025/2026 — Ciclo em andamento

**[FATO — SLIDE 08]**

- A timeline rotula o período como **"Hoje 2025/26"** e **"Loading — ciclo em andamento"**.
- **Destaques do Prêmio Valor Inovação:** **58º lugar no ranking geral do Brasil** e **4º lugar na categoria alimentos e bebidas**.
- **Cafeína Week 2026 com hackathon**, com menção a **FIAP e AWS**.

**[PENDENTE]** O slide não discrimina a qual edição anual do prêmio se referem exatamente os destaques **58º / 4º**. Não converter automaticamente essas posições em um ranking específico de 2026 sem outra fonte.

### 3.5. Tabela rápida de indicadores do Hub

| Período associado no slide | Indicador | Valor apresentado | Natureza |
|---|---|---|---|
| 2022 / primeiro ano do programa | Ideias no Cafeína Ideias | **793** | Quantidade de ideias |
| 2023 | Ganhos estimados | **R$ 1 milhão** | Estimativa financeira |
| 2023 | Prêmio Valor Inovação | **141º** | Posição de ranking |
| 2024 | Ganhos estimados | **R$ 8 milhões** | Estimativa financeira |
| 2024 | Startups inscritas em desafios | **439** | Inscrições |
| 2024 | PoCs | **16** | Provas de conceito mencionadas |
| 2024 / terceiro ano | Ideias no Cafeína Ideias | **Perto de 3 mil** | Quantidade aproximada |
| 2024 | Prêmio Valor Inovação Brasil | **114º** | Posição de ranking |
| 2025/26 (conforme apresentação) | Prêmio Valor Inovação — geral | **58º** | Posição de ranking; ano exato a validar |
| 2025/26 (conforme apresentação) | Prêmio Valor Inovação — alimentos e bebidas | **4º** | Posição setorial; ano exato a validar |

---

## 4. Panorama da 3corações apresentado no evento

### 4.1. Escala operacional e comercial

**[FATO — SLIDE 10]** No slide **"Como a 3corações tem explorado novos mundos"**, a empresa apresenta os seguintes números:

| Dimensão | Dado apresentado |
|---|---|
| Portfólio | **Mais de 30 marcas** |
| Itens de portfólio | **Mais de 900 SKUs** (*stock keeping units*, unidades distintas de estoque/produto) |
| Estrutura industrial | **15 fábricas** em **sete estados** |
| Pessoas | **Cerca de 12,7 mil colaboradores** |
| Distribuição | **Mais de 600 mil pontos de venda** |
| Posição no setor | **Nº 1 em café no Brasil, segundo a ABIC** |

**Nota metodológica do slide:** os quantitativos de **fábricas, colaboradores e pontos de venda** já consideram a **compra de Yoki e Kitano (setembro de 2026)**. O rodapé relaciona como fontes **Bloomberg Línea, NSC Total, Movimento Econômico e AgFeed**, com indicação específica de **marcas** junto a AgFeed. A fotografia não permite associar inequivocamente cada fonte a cada indicador, portanto não fazer esse mapeamento sem consulta adicional.

**Cuidado:** os valores são os comunicados na apresentação, referentes ao contexto do evento, e não uma auditoria atualizada em tempo real. "Mais de 30" e "mais de 900" não são números exatos.

### 4.2. Leitura estratégica, sem criar requisitos

**[INTERPRETAÇÃO]** A diversidade de marcas e SKUs, a operação industrial em múltiplos estados e a capilaridade dos pontos de venda contextualizam desafios como operação de máquinas, pedidos internacionais, autoatendimento e inteligência comercial. **Os temas reais foram explicitados no slide 19**; não inferir desafios adicionais apenas a partir do porte da companhia.

---

## 5. Jornada e transformação estratégica da 3corações

O slide **"A jornada da 3corações"**, identificado como **slide 11/35**, foi fotografado em dois momentos. A fotografia final apresenta a linha do tempo completa e serve como referência principal.

### 5.1. 1959 — A origem

**[FATO — SLIDE 11]** Em **São Miguel (RN)**, **João Alves de Lima** começa a vender **café verde**.

### 5.2. 2020 — Transformação digital

**[FATO — SLIDE 11]** A empresa assinala **2020** como marco de **"Transformação Digital"**, acompanhado da frase **"A ponte para a transformação digital da companhia"**.

**[PENDENTE]** A apresentação não detalha, neste slide, quais sistemas, processos ou projetos iniciaram essa transformação.

### 5.3. 2022 — Hub, Mercafé e novos mercados

**[FATO — SLIDE 11]**

- Nascimento do **Cafeína Hub**, a plataforma de inovação.
- **Mercafé:** e-commerce **com curadoria da 3corações**, para quem é **"Movido a Café"**.
- **Joint venture com a Positive Brands**, com referência às marcas **A Tal da Castanha** e **Jungle**.

### 5.4. 2024 — Consumidor no centro

**[FATO — SLIDE 11]** Diretriz descrita no slide:

> "Foco em produtos non-coffee e em estar em todas as ocasiões de consumo."

**[INTERPRETAÇÃO]** A linha do tempo apresenta uma evolução do negócio para além da categoria tradicional de café, enfatizando diversificação de produtos e ocasiões de consumo. Isso **não define**, por si só, a problemática que os participantes devem resolver.

### 5.5. 2026 — Referência em inovação (segundo a apresentação)

**[FATO — SLIDE 11, imagens do segundo lote]** A animação completa do slide acrescenta uma etapa em **2026**, rotulada **"Referência em inovação"**, com estes destaques:

- **Aquisição de Yoki e Kitano**.
- **4ª mais inovadora de alimentos e bebidas**, relacionada ao **Prêmio Valor Inovação**.
- **"Referência em IA"** — expressão institucional exibida no slide, sem detalhamento de projetos, evidências ou critérios.
- **Área de inovação reconhecida nacionalmente — AEVO**.

**Cuidado:** são declarações apresentadas pela organização, não uma verificação externa da data da aquisição, do ranking ou de uma certificação específica em IA. O slide 10 também informa que seus dados operacionais já consideram a compra de Yoki e Kitano em setembro/2026.

### 5.6. As três fases estratégicas da companhia

**[FATO — SLIDE 11, versão mais completa]** A parte inferior do slide traz a faixa **"Em paralelo: as fases da companhia"**:

| Período | Fase nomeada pela empresa | Descrição apresentada |
|---|---|---|
| **1959–2017** | **Expandir** | Crescer a operação, adquirir marcas, continuar o legado do pai e inovar para sustentar o negócio. O próprio slide destaca **+30 marcas / +900 SKUs** nesse quadro. |
| **2017–2023** | **Orientada ao mercado** | Movimento para entender o mercado em que o consumidor está inserido. |
| **2024 → futuro** | **Orientada ao consumidor** | **"O consumidor no centro de tudo o que a companhia faz."** |

**[INTERPRETAÇÃO]** A passagem de expansão de operação para entendimento de mercado e centralidade do consumidor é apresentada como evolução estratégica. Essas fases são contexto da empresa, não necessariamente os temas dos cinco desafios.

---

## 6. Crescimento, faturamento e lucro operacional da 3corações

### 6.1. Crescimento do faturamento

**[FATO — SLIDE 12/35, IMG_1388(1).jpeg]** Título **"Explorar novos mundos dá resultado"**. O slide apresenta:

- **CAGR de faturamento (2019–2025): 19,3% ao ano** — taxa composta de crescimento anual informada na apresentação.
- **Crescimento médio: 2,9 vezes em seis anos**, segundo o slide.

| Ano | Faturamento indicado | Unidade |
|---|---:|---|
| **2019** | **R$ 4,9 bilhões** | Faturamento |
| **2021** | **R$ 7 bilhões** | Faturamento |
| **2023** | **R$ 9,8 bilhões** | Faturamento |
| **2025** | **R$ 14,1 bilhões** | Faturamento |

**[FATO — SLIDE 12]** O rodapé indica como fontes **ABRAS/Neotrade (2019), InfoMoney (2021 e 2023)** e **demonstrações financeiras consolidadas da 3corações (2025; lucro operacional de 2024 e 2025)**. É uma transcrição do rodapé e não substitui leitura das publicações originais.

### 6.2. Lucro operacional

**[FATO — SLIDE 12]** O slide informa **lucro operacional em 2025 de R$ 1,26 bilhão**, equivalente a **3,5 vezes o de 2024**. Não fornece, no gráfico, o valor monetário exato de 2024.

**Distinção financeira crítica:** os **R$ 1 milhão (2023)** e **R$ 8 milhões (2024)** citados na jornada do **Cafeína Hub** são **ganhos estimados associados à inovação**; não representam faturamento nem lucro operacional da 3corações. Também não são parcelas a somar automaticamente aos resultados financeiros consolidados.

**[INTERPRETAÇÃO]** A apresentação contextualiza o hackathon dentro de um negócio em expansão e que enfatiza resultados financeiros mensuráveis. O slide não estabelece meta de faturamento para as soluções do evento.

---

## 7. Formato e dimensão do hackathon de 2026

**[FATO — SLIDE 14/35, IMG_1390(1).jpeg]** A seção **"O evento — Os próximos dois dias em números"** apresenta:

| Indicador | Informação oficial nos slides |
|---|---|
| **Duração** | **2 dias**, terça-feira **13/10/2026** e quarta-feira **14/10/2026**, na **FIAP**. |
| **Participantes** | **50 participantes** de **IA, Desenvolvimento, Dados e Design**. São áreas de atuação citadas, não cotas obrigatórias por profissão. |
| **Equipes** | **10 equipes** de **até 5 pessoas**, misturando especialidades; no contexto do slide, seriam formadas em **13/10 ao meio-dia**. |
| **Desafios** | **5 desafios de negócio**, com **dores reais da 3corações**. |
| **Ferramenta oficial** | **Kiro, da AWS**. |

**[FATO — SLIDE 13/35, IMG_1389(1).jpeg]** Transição da apresentação **"Agora que nossos laços já estão feitos, bora para o que interessa!"** com comandos estilizados (`historia.contar()`, `hub.abrirPortas()`, `lacos.criar()`, `cafe.servir()`, `hackathon.start()`). Trata-se de recurso de linguagem da apresentação, **não de instruções técnicas executáveis nem requisitos**.

**[ATUALIZADO]** O slide 19 apresenta os cinco desafios e os slides 25–26 detalham o primeiro. Os HTMLs oficiais posteriores adicionam **links de bases documentais para 01, 02, 04 e 05**, embora esses arquivos externos não tenham sido analisados aqui. APIs internas e vinculação efetiva das equipes **não estão confirmadas**.

**[FATO — SLIDE 19]** Cada desafio aparece com identificadores de equipes **A** e **B**, coerentes com as dez equipes anunciadas. **[PENDENTE]** O slide não explica o mecanismo de alocação, se as equipes foram efetivamente atribuídas na proporção exibida ou se há outras regras de escolha/sorteio.

---

## 8. Ferramenta oficial, créditos e suporte da AWS

### 8.1. Uso do Kiro

**[FATO — SLIDE 15/35, IMG_1391(1).jpeg]** Título: **"Vocês vão construir com o Kiro"**.

- **Kiro** é apresentado como **ferramenta da AWS para desenvolver os protótipos**.
- Os organizadores anunciam **créditos equivalentes a "1 mês de trabalho" para usar em 2 dias**.
- Mensagem: **"Créditos de sobra para testar, errar e construir sem economizar."**

**Cuidado operacional:** a expressão **"1 mês de trabalho"** é uma comparação promocional do slide, **não** um saldo numérico, valor financeiro, ausência de limites ou disponibilidade garantida após o evento. Não há, no material, limites exatos de consumo, modalidade da conta, instruções para ativar créditos nem regras sobre uso de outras ferramentas.

### 8.2. Mentoria e suporte

**[FATO — SLIDE 15]** Suporte no Kiro via **Vitor Hansen (AWS)**.

- **13/10, 10h:** workshop **"Kiro, do zero ao primeiro protótipo"**, com duração programada de **2 horas**.
- **Durante os dois dias:** Vitor Hansen é anunciado como disponível para apoiar as equipes no hackathon.
- Em caso de bloqueio: **"Chame o Hansen na hora"**, conforme o slide.
- **[FATO — SLIDES 16–17]** As sessões de desenvolvimento anunciam **suporte AWS e FIAP**; há ainda **suporte assistido de times de negócio ao longo da tarde** nos dois dias.

**[PENDENTE]** Como o acesso ao Kiro/créditos é distribuído, quais permissões e limites existem e se há ferramentas/integradores obrigatórios, permitidos ou proibidos.

---

## 9. Cronograma oficial e checkpoints

**[FATO — SLIDES 16–17]** A seguir, os horários mostrados na grade do evento. O cronograma é o **anunciado nos slides**, sujeito a mudanças comunicadas pelos organizadores; não se trata de registro do que efetivamente ocorreu. **Fuso:** horário local do evento (São Paulo, Brasil; não há indicação de outro fuso nos slides).

### 9.1. Dia 01 — terça-feira, 13 de outubro de 2026

**[FATO — SLIDE 16/35, IMG_1392(1).jpeg]** Painel destaca **3h45 de mão na massa** e **2h de workshop Kiro**.

| Horário de início | Atividade | Duração informada / observações |
|---|---|---|
| **08h30** | Credenciamento | **30 min** |
| **09h00** | Abertura e apresentação dos desafios | **1h** |
| **10h00** | Workshop Kiro | **2h** — Vitor Hansen (AWS) |
| **12h00** | Formação das equipes e distribuição dos desafios | **30 min** — Ricardo Fortes (FIAP) |
| **12h30** | Almoço | **1h30** |
| **14h00** | Mão na massa: ideação + início da construção | **3h45** — suporte AWS e FIAP; times de negócio durante toda a tarde |
| **17h45** | Recados e check-out | **15 min** |

**[FATO — SLIDE 16]** Ativações paralelas durante o dia no coworking: **café gelado, cappuccino proteico, barra de proteína** (com nomes **Murilo e Messias** na grade) e **pausa para café**. São facilidades/ativações e não atividades obrigatórias de construção.

### 9.2. Dia 02 — quarta-feira, 14 de outubro de 2026

**[FATO — SLIDE 17/35, IMG_1393(1).jpeg]** Painel destaca **5h25 de mão na massa** e **16h30 como envio final**.

| Horário de início | Atividade | Duração informada / observações |
|---|---|---|
| **08h30** | Check-in | **15 min** |
| **08h45** | Tecnologia na 3corações: oportunidades e estrutura | **30 min** — **Janylle Amaral e Silvia Pearce**, da 3corações |
| **09h15** | Mão na massa: construção + *speed dating* com o RH | **2h25** — suporte AWS e FIAP |
| **11h40** | Instruções para o pitch | **20 min** |
| **12h00** | Almoço | **1h30** |
| **13h30** | Mão na massa: construção final | **3h** — suporte AWS e FIAP; times de negócio durante toda a tarde |
| **16h30** | **Envio final + coffee break** | **30 min**; horário explicitamente identificado como **envio final** |
| **17h00** | Apresentação das soluções | **1h30** |
| **18h30** | Deliberação da banca | **15 min** |
| **18h45** | Anúncio dos ganhadores | **15 min** |

**[FATO — SLIDE 17]** Também constam ativações paralelas no coworking de café gelado, cappuccino proteico, barra de proteína e café.

### 9.3. Tempos de construção e marcos importantes

- **Tempo guiado de prototipação exibido:** **3h45 no primeiro dia + 5h25 no segundo = 9h10** de janelas programadas de mão na massa. O total é cálculo sobre a grade, não uma nova afirmação dos organizadores.
- **Workshop inicial Kiro:** 13/10 às 10h, por 2h.
- **Formação e distribuição de desafios:** 13/10 às 12h.
- **Instruções para o pitch:** 14/10 às 11h40.
- **Envio final programado:** **14/10 às 16h30**. A grade não explicita se a plataforma bloqueia exatamente nesse horário ou o que acontece em caso de atraso.
- **Apresentações à banca:** 14/10, das 17h às 18h30 (bloco de 1h30). **[ATUALIZAÇÃO — SLIDE 20]** Cada equipe dispõe de **5 minutos de pitch + 3 minutos de perguntas**.
- **Anúncio de ganhadores:** 14/10 às 18h45, com encerramento da grade às 19h00.

**[INTERPRETAÇÃO]** O cronograma torna especialmente relevante preparar um **protótipo demonstrável e uma narrativa de apresentação dentro de poucas horas**. Isso não determina ainda as métricas de avaliação do produto nem requisitos de entrega.

---

## 10. Premiação do hackathon

**[FATO — SLIDE 18/35, IMG_1394(1).jpeg]** Prêmios anunciados:

| Colocação | Premiação principal | Voucher | Destinatários |
|---|---|---|---|
| **1º lugar** | **Máquina TRES Touch** | **Mercafé R$ 300** | **Para cada integrante** da equipe |
| **2º lugar** | **Máquina TRES Luna** | **Mercafé R$ 150** | **Para cada integrante** da equipe |
| **3º lugar** | **Máquina TRES Luna** | Nenhum voucher listado | **Para cada integrante** da equipe |

### 10.1. Benefícios adicionais

- **Todo o pódio:** **visita ao escritório da AWS**; segundo o slide, as **três equipes vencedoras** conhecerão a AWS por dentro. Não há informação sobre data, transporte ou demais custos.
- **Todos que concluírem o hackathon:** **caderno e adesivos da Cafeína Week**, conforme seção **"É para todo mundo"**.

**[ATUALIZADO PELOS HTMLs]** O slide 20 só orientava a demonstração, mas **os seis HTMLs oficiais apresentam pesos de avaliação (25/25/20/20/10), detalhados na seção F7**. Continuam pendentes regras de desempate, requisitos de elegibilidade, termos dos prêmios e propriedade intelectual.

---

## 11. Os cinco desafios oficiais — perguntas centrais

**[FATO — SLIDE 19/35, IMG_1396(1).jpeg e IMG_1397(1).jpeg]** O slide intitulado **"5 desafios. 5 dores reais."** foi fotografado em dois estágios de apresentação: a primeira foto mostra desafios 01–03 e a segunda apresenta os cinco. A lista abaixo consolida a **versão completa** sem duplicar informações. As perguntas são transcrições do enunciado geral mostrado pela organização, não uma interpretação do participante.

| Nº | Nome no quadro geral | Pergunta-desafio apresentada | Equipes indicadas no slide |
|---:|---|---|---|
| **01** | **Análise de Melhorias em Máquinas TRES** | **"Como criar um histórico confiável de cada máquina, identificar padrões e apoiar decisões de engenharia com evidências reais de campo?"** | A e B |
| **02** | **Pedidos de Exportação** | **"Como tornar a jornada de pedidos internacionais simples, confiável e sem retrabalho, da intenção de compra ao pedido validado logisticamente?"** | A e B |
| **03** | **Jornada de autoatendimento** | **"Como dar autonomia ao consumidor e reduzir chamados técnicos desnecessários, mantendo o suporte humano para os casos que realmente precisam dele?"** | A e B |
| **04** | **IA para insights de venda (CORA)** | **"Como transformar a CORA Vendas em um copiloto conversacional que diga ao vendedor, em campo, qual é a melhor próxima ação em cada cliente da rota?"** | A e B |
| **05** | **IA para insights do Gestor (CORA)** | **"Como desenvolver um agente conversacional eficiente para apoiar gestores a guiar seus vendedores e ter visibilidade da sua equipe de vendas?"** | A e B |

**[FATO — SLIDE 23/35, IMG_1402(1).jpeg]** O slide de transição **"Vamos falar dos desafios"** apresenta rótulos abreviados dos mesmos cinco temas: **Máquinas TRES**, **Exportação**, **Autoatendimento**, **CORA vendas** e **CORA gestor**. Esses rótulos **não são cinco desafios adicionais**.

### 11.1. Nomes alternativos de cada desafio usados na apresentação

**[FATO — SLIDES 19, 23–25, 27]** As denominações mudam conforme o slide; são referências ao **mesmo número de desafio**:

| Nº | Título do quadro geral (slide 19) | Título abreviado / título do detalhamento |
|---:|---|---|
| 01 | Análise de Melhorias em Máquinas TRES | **Máquinas TRES / DNA da Máquina**, apresentado como **Desafio 01 — P&D TRES** (slides 23–25) |
| 02 | Pedidos de Exportação | **Exportação / Pedido sem Fronteiras** (slides 23–24 e 27–28) |
| 03 | Jornada de autoatendimento | **Autoatendimento / Autoatendimento TRES** (slides 23–24) |
| 04 | IA para insights de venda (CORA) | **CORA vendas / IA para insights de venda (CORA)** (slides 23–24) |
| 05 | IA para insights do Gestor (CORA) | **CORA gestor / IA para insights do Gestor (CORA)** (slides 23–24) |

**[ATUALIZADO NA VERSÃO 0.6]** Os seis HTMLs oficiais **já oferecem descrições operacionais dos desafios 01–05**; o **PDF de 10 páginas do Desafio 03 também já foi analisado** (seção F11). Ver principalmente a seção **“FOCO PRIORITÁRIO — DESAFIO 03: AUTOATENDIMENTO TRES”**. Outras fontes vinculadas (manuais, planilhas dos demais desafios) **não foram abertas/lidas**. No CORA, os HTMLs confirmam a existência de agentes e bases simuladas; não concluir que há APIs internas acessíveis sem confirmação.

---

## 12. Desafio 01 — DNA da Máquina (P&D TRES)

### 12.1. Escopo, equipamento e problema principal

**[FATO — SLIDE 25/35, IMG_1404(1).jpeg]** Título: **"Desafio 01 — P&D TRES / DNA da Máquina"**. O slide indica como escopo as **máquinas G5 Passione e G4 Luna**.

> "Cada máquina TRES carrega uma história de reclamações, visitas técnicas e otimizações. **Mas essa história não está escrita em lugar nenhum:** os capítulos estão espalhados, contados por pessoas diferentes."

A **pergunta-desafio** reapresentada é:

> "Como criar um histórico confiável de cada máquina, identificar padrões e apoiar decisões de engenharia com evidências reais de campo?"

**[FATO]** O problema enfatizado é a ausência de um histórico unificado e confiável sobre a trajetória de cada máquina, apesar de existirem relatos de campo, visitas técnicas, reparos e iniciativas de melhoria.

**[ATUALIZADO PELO HTML OF-01]** O briefing informa dados de reclamações **2025–2026** para G5 Passione e G4 Luna e um diretório de melhorias do G5, além do link externo. **Continuam pendentes**, sem leitura das planilhas: identificadores efetivamente existentes, disponibilidade por número de série, chaves de junção, cobertura e metodologia de antes/depois.

### 12.2. Fluxo atual — "Como funciona hoje"

**[FATO — SLIDE 26/35, IMG_1405(1).jpeg]** O slide se intitula **"A melhoria sai do P&D, mas a prova de que funcionou nunca volta"** e representa um ciclo com etapas de 1 a 7. As etapas 3–4 aparecem agrupadas na imagem.

| Etapa | Área/ator | Processo descrito | Informação importante |
|---|---|---|---|
| **1** | Consumidor | **Relata o sintoma.** | Exemplo do slide: **"máquina vazando"**. |
| **2** | Customer Success | **Registra a reclamação.** | Registro no **Salesforce**, usando as palavras do consumidor. |
| **3–4** | Técnico | **Diagnostica e repara.** | Registra a **conclusão técnica**. |
| **5** | Chamado | **Fica arquivado.** | **Registros soltos, sem histórico por máquina.** |
| **6** | P&D | **Analisa à mão.** | Extrai relatórios e monta gráficos manualmente. |
| **7** | P&D | **Lança a melhoria.** | Nova versão / novo número de série, que dá origem a **novos chamados**. |

**Precisão:** o slide nomeia **Salesforce** no registro da reclamação; **não** afirma que todas as etapas técnicas, o cadastro serializado ou as melhorias são armazenadas no Salesforce. Não assumir integração ou acesso à API sem confirmar.

### 12.3. Três falhas explicitamente apontadas no fluxo atual

**[FATO — SLIDE 26]** O próprio slide destaca três pontos numerados, que são **dores confirmadas**:

1. **Etapas 2 e 4 — "Duas versões da mesma história".** A reclamação e a conclusão do técnico **nem sempre batem**.
2. **Etapa 6 — "Só se vê o que se procura".** Cada pergunta analítica exige **extrair, limpar e montar gráficos**.
3. **Da etapa 7 para a 1 — "O ciclo que nunca fecha".** **Ninguém compara o antes e o depois de cada melhoria.**

### 12.4. Resultados desejáveis a investigar — NÃO requisitos oficiais

As sugestões abaixo são **[HIPÓTESES DE SOLUÇÃO]**, inferidas apenas das dores descritas. Elas **não** aparecem como funcionalidades obrigatórias nos slides:

- **Linha do tempo por identidade de máquina** que ligue reclamações, chamados, reparos, visitas e versão/revisão do produto.
- **Reconciliação de relatos** entre texto do consumidor e diagnóstico técnico, com rastreabilidade da fonte e tratamento explícito de divergências.
- **Consulta analítica guiada por perguntas** para reduzir a necessidade de montar relatórios ad hoc manualmente.
- **Análise antes/depois por versão ou lote**, com métricas de incidência de problemas e janelas comparáveis.
- **Evidências auditáveis** para o P&D testar se uma alteração reduziu recorrência de defeitos, considerando possíveis fatores de confusão (base instalada, uso e sazonalidade).

**[ATUALIZADO PELO HTML OF-01]** O briefing informa um relatório real e anonimizado de reclamações para G5/G4 e um diretório G5, sem acesso direto ao Salesforce; há link externo não aberto nesta base. Confirmar granularidade, número de série, chaves, políticas de uso e avaliação de impacto. Não presumir que a vinculação de registros por máquina é trivial.

---

## 13. Desafio 02 — Pedido sem Fronteiras (Exportação)

### 13.1. Área responsável, contexto e enunciado

**[FATO — SLIDE 27/35, `IMG_1406.jpeg`]** O slide identifica o **Desafio 02 — Exportação**, com o título **"Pedido sem Fronteiras"**, vinculado ao **time de internacionalização**.

> "O café brasileiro está cruzando fronteiras, principalmente rumo aos países do Mercosul. Mas cada pedido de exportação ainda percorre um caminho de e-mails, planilhas e contas feitas à mão."

A **pergunta-desafio** oficial é:

> "Como tornar a jornada de pedidos internacionais simples, confiável e sem retrabalho, da intenção de compra ao pedido validado logisticamente?"

**[FATO]** O recorte da problemática é o **processamento de pedidos de exportação**, sobretudo no contexto de vendas aos países do Mercosul; o enunciado menciona **principalmente** esses países, não exclusivamente. Não há no slide requisitos relativos a idiomas, normas alfandegárias específicas, precificação ou modalidade de transporte.

### 13.2. Fluxo atual do pedido de exportação — "Como funciona hoje"

**[FATO — SLIDE 28/35, `IMG_1407.jpeg`]** Título do slide: **"Do e-mail ao sistema, o pedido passa por planilhas e mãos"**. São retratadas quatro etapas, três primeiras ainda baseadas em planilhas/cálculos e uma última de inclusão no sistema corporativo.

| Etapa | Responsável no slide | Atividade | Como funciona hoje | Dor explícita |
|---:|---|---|---|---|
| **01** | **Distribuidor** | **Pedido por e-mail** | O pedido chega em planilhas com **layouts diferentes a cada envio**. | **"Nada é padronizado"**. |
| **02** | **Exportação** | **Consolidação manual** | O pedido é consolidado em **planilhas Excel manuais e pesadas**. | **"Fórmulas de manutenção difícil"**. |
| **03** | **Exportação** | **Cubagem e paletização à mão** | **Volume, pallets e ocupação do contêiner** são calculados manualmente. | **"Erros de ocupação e retrabalho logístico"**. |
| **04** | **Exportação** | **Redigitação no sistema** | O pedido validado é **digitado de novo no sistema corporativo**. | **"Item por item, à mão"**. |

**[FATO — SLIDE 28, problema transversal em toda a cadeia]**

> "O processo depende de poucas pessoas e não tem trilha de auditoria: ninguém sabe o que foi alterado, nem por quem."

**Atenção:** o material menciona **e-mail**, **Excel**, **planilhas** e **sistema corporativo**, mas **não identifica o ERP/plataforma, protocolos de integração, formatos de arquivo específicos, volumes de pedidos ou regras de cubagem**. Não inventar o nome do software final nem presumir acesso por API.

### 13.3. Dores confirmadas e consequências que precisam ser verificadas

**[FATO — SLIDES 27–28]** Há pelo menos **cinco dores explícitas** descritas pela organização:

1. **Falta de padronização de entrada:** pedidos chegam com planilhas de estruturas variáveis.
2. **Consolidação e manutenção difíceis:** cálculos e fórmulas em arquivos Excel manuais/pesados.
3. **Risco de erro em cubagem, paletização e ocupação de contêiner:** com retrabalho logístico.
4. **Redigitação:** reentrada manual de cada item no sistema corporativo após validação.
5. **Baixa rastreabilidade e dependência de pessoas-chave:** não há trilha de auditoria de alterações e seus autores; conhecimento/processo concentrado em poucas pessoas.

**[INTERPRETAÇÃO]** O processo apresenta oportunidades de **padronização, controle de versões, automação de validações e rastreabilidade**, mas essas alternativas **ainda não são requisitos técnicos formalizados**. Os slides **não quantificam** tempo médio de processamento, taxa de erros, custo por pedido, número de distribuidores nem perdas financeiras.

### 13.4. Possíveis frentes de solução — HIPÓTESES, não requisitos da 3corações

As propostas abaixo servem somente para orientar pesquisa e prototipação **após validação com os mentores**:

- **[HIPÓTESE]** Camada de recepção/normalização que consiga interpretar planilhas com layouts diferentes e produzir um pedido canônico, mantendo o arquivo original e a procedência de cada campo.
- **[HIPÓTESE]** Validações por campos obrigatórios, produtos, quantidades e restrições comerciais ou logísticas **somente quando as respectivas regras forem disponibilizadas**.
- **[HIPÓTESE]** Módulo de apoio aos cálculos de **cubagem, quantidade de pallets e ocupação de contêiner**, explicitando premissas, dados físicos dos produtos e regras fornecidas pela empresa; nunca tratar um cálculo demonstrativo como validação logística real sem conferir.
- **[HIPÓTESE]** Fluxo rastreável de aprovações e correções, com histórico de **quem alterou o quê e quando**, versões e justificativas.
- **[HIPÓTESE]** Exportação estruturada e/ou integração ao **sistema corporativo**, condicionada à identificação do sistema e à disponibilidade/permissão de uma interface; sem acesso, um protótipo pode demonstrar geração de arquivo de importação **apenas se o formato real for confirmado**.

### 13.5. Perguntas objetivas para o time de internacionalização

**[NOTA HISTÓRICA — não respondido nas fotos dos slides 27–28; parte respondida posteriormente pelo HTML OF-02]**

1. Quais **layouts reais de pedidos** existem? XLSX, CSV, PDF, outros? Quantos distribuidores/layouts? Há amostras autorizadas?
2. Quais **campos e validações** precisam existir para o pedido ser considerado correto, completo e "validado logisticamente"? Qual é o fluxo de aprovação?
3. Quais fontes contêm **dimensões e pesos de SKUs, quantidade por caixa, padrões de pallet, limites e tipos de contêiner**? Quais exceções logísticas são frequentes?
4. Qual é o **sistema corporativo** de destino? Existe API, importação de arquivos ou ambiente de teste disponível? Quem autoriza integrações?
5. Quem pode **editar, corrigir, validar e aprovar** pedidos? É necessário log de auditoria por item/campo ou por versão de documento?
6. Quais são **volume de pedidos, frequência, tempo médio, erros recorrentes, retrabalho e custo** atuais? Existe meta de redução?
7. O protótipo deve cobrir a cadeia **da intenção de compra até a validação logística**, ou é aceitável demonstrar um fluxo reduzido ponta a ponta? Quais dados sintéticos estão autorizados se não houver base real?

**Critério de leitura:** os pontos desta seção são **perguntas para investigação**, não declarações de que dados, ferramentas ou integrações estejam disponíveis.

---

## 14. Dinâmicas do evento, suporte e apresentação final

**[FATO — SLIDE 20/35, IMG_1398(1).jpeg]** A organização descreve **quatro dinâmicas de apoio**:

| Dinâmica | Quando | Orientação apresentada |
|---|---|---|
| **Kiro + suporte AWS e FIAP** | Workshop no **dia 1 às 10h**; suporte **o tempo todo** | Em bloqueios de **ambiente, acesso ou integração**, chamar o time **na hora**, e não ficar duas horas tentando sozinho. |
| **Suporte assistido dos times de negócio** | **À tarde, nos dois dias** | Levar **perguntas específicas** aos mentores. O exemplo **"Esse dado existe?"** é tratado como mais produtivo do que **"O que vocês acham?"**. |
| **Speed dating com o RH** | **Dia 2, durante a construção** | Rodadas rápidas para conhecer o time de RH e **oportunidades na 3corações**. |
| **Apresentação das soluções** | **Instruções dia 2 às 11h40; pitch dia 2 às 17h** | **5 minutos de pitch + 3 minutos de perguntas**; apresentar **protótipo funcionando**. Mensagem: **"demonstração vale mais que slide"**. |

### 14.1. Significado operacional para a equipe

- **[FATO]** A banca fará perguntas após o pitch, segundo a orientação de duração **5+3 minutos**.
- **[FATO]** O slide incentiva expressamente **demonstração funcional**, em vez de depender apenas de slides.
- **[INTERPRETAÇÃO]** É prudente reservar tempo de construção para uma jornada demonstrável de ponta a ponta e ensaiar uma explicação curta do problema, da solução e da evidência. **Isso é recomendação estratégica, não critério formal anunciado.**
- **[ATUALIZADO PELOS HTMLs]** O canal/URL de envio continua pendente. Os HTMLs **já exigem protótipo funcional, jornada demonstrável, pitch e código/README/especificações**, e divulgam os **cinco critérios com pesos** (seção F7). O tempo de 5+3 minutos permanece válido.

---

## 15. Regras e acordos anunciados

**[FATO — SLIDE 21/35, IMG_1400(1).jpeg]** Título: **"Os combinados da expedição"**.

| Nº | Regra/orientação | Explicação expressa no slide |
|---:|---|---|
| **01** | **Mesmas regras para todos** | **O que um mentor responder sobre um desafio vale para as duas equipes**. |
| **02** | **Dados com cuidado** | **As informações dos desafios são confidenciais e ficam aqui**, conforme o termo que os participantes assinaram. |
| **03** | **Kiro é a ferramenta oficial** | É com ele que os participantes constroem os protótipos, com apoio da AWS. |
| **04** | **Prazo é prazo** | **O envio final fecha amanhã, às 16h30**, ou seja, em **14/10/2026 às 16h30**, dado o contexto do evento em 13/10. |
| **05** | **Cuidem de vocês** | Pausas, água e café. |

### 15.1. Confidencialidade — atenção antes de subir mais conteúdo às Sources

**[FATO]** A apresentação declara que as **informações dos desafios são confidenciais** e que existe **termo assinado**.

**[PENDENTE]** O texto do termo **não foi fornecido**, portanto não há base para afirmar que o material pode ser compartilhado, publicado, enviado para serviços externos ou utilizado em ferramentas de IA. **Antes de adicionar esta base a Sources do ChatGPT ou enviar datasets e briefings confidenciais, verificar as permissões do termo e as orientações dos organizadores.** Não publicar dados de clientes, informações internas identificáveis, credenciais ou materiais de circulação restrita em repositórios públicos.

**[INTERPRETAÇÃO]** A regra 01 indica que respostas de mentoria **não criam privilégios exclusivos** para a equipe que perguntou; podem valer para a equipe concorrente do mesmo desafio. Isso não demonstra que todas as equipes possuem automaticamente os mesmos dados, credenciais ou ambientes.

---

## 16. Pessoas de apoio anunciadas para cada desafio

**[FATO — SLIDE 24/35, IMG_1403(1).jpeg]** Título: **"Quem vai apoiar vocês em cada desafio"**. Os nomes abaixo são **profissionais de suporte apresentados no slide**, e **não** integrantes das equipes competidoras. Não foram fornecidos cargos exatos nem contatos pessoais.

| Desafio | Nome na distribuição de suporte | Pessoas indicadas |
|---:|---|---|
| **01** | **DNA da Máquina** | **Jennifer Pontes; Lauro Rê; Thiago Costa** |
| **02** | **Pedido sem Fronteiras** | **Maria Cristina; Thiago Costa** |
| **03** | **Autoatendimento TRES** | **Jennifer Pontes; Lauro Rê; Thiago Costa** |
| **04** | **IA para insights de venda (CORA)** | **Marcelo Sena; Elzevir Sá; Pablo Jesus; Camila; Thiago Costa** |
| **05** | **IA para insights do Gestor (CORA)** | **Marcelo Sena; Elzevir Sá; Pablo Jesus; Thiago Costa** |

**Nota de leitura:** o slide apresenta **"Lauro Rê"** e **"Elzevir Sá"** dessa forma na fotografia. Caso a organização disponibilize lista oficial de nomes/contatos, usar essa lista para confirmar a grafia. Não buscar nem publicar contatos privados dessas pessoas sem necessidade.

---

## 17. Mensagens motivacionais e transições

- **[FATO — SLIDE 22/35, IMG_1401(1).jpeg]** Slide da **Cafeína Week 2026**, com a frase: **"Todo dia, a cafeína acorda o Brasil. Nos próximos dois dias, vocês são a cafeína."** e referência a **1959 — São Miguel (RN) → 2026 — FIAP**.
- **[FATO — SLIDE 23/35, IMG_1402(1).jpeg]** Mensagem **"Vamos falar dos desafios"** e faixa inferior com os cinco temas. É uma transição para o detalhamento individual dos problemas.

**[INTERPRETAÇÃO]** São mensagens de engajamento e narrativa do evento. **Não** devem ser confundidas com regras de entrega, funcionalidades ou critérios de avaliação.

---

## 18. Temas transversais percebidos na apresentação

Esta seção organiza sinais institucionais em conjunto com os desafios agora conhecidos. O **slide 19** é a fonte dos enunciados gerais; o **slide 25–26** é a fonte detalhada do desafio 01.

| Tema | Evidência nas fotos | Leitura preliminar |
|---|---|---|
| **Inovação colaborativa** | "Nenhuma empresa explora novos mundos sozinha"; Cafeína Open com startups, universidades e centros de pesquisa | **[INTERPRETAÇÃO]** Parcerias e colaboração fazem parte da narrativa do evento. |
| **Problemas reais de negócio** | Cafeína Open propõe soluções para desafios reais; citação sobre fazer negócios e solucionar problemas | **[ATUALIZADO]** Aderência (25%) e impacto no negócio/usuário (25%) constam expressamente nos briefings HTML; ver F7. |
| **Impacto e mensuração** | Ganhos **estimados** de R$ 1 MM e R$ 8 MM no histórico do Hub | **[INTERPRETAÇÃO]** A instituição apresenta números financeiros como forma de comunicar os resultados da inovação. |
| **Experimentação** | 16 PoCs e 439 inscrições de startups em 2024 | **[INTERPRETAÇÃO]** Provas de conceito figuram no histórico de inovação da organização. |
| **Empoderamento digital** | Cafeína +Tech; marco de transformação digital em 2020 | **[INTERPRETAÇÃO]** Capacidades digitais integram a agenda corporativa. |
| **Centralidade do consumidor** | Marco de 2024 da jornada da 3corações | **[INTERPRETAÇÃO]** Experiência, preferências e ocasiões de consumo aparecem como orientação estratégica. |
| **Diversificação** | Mais de 30 marcas, mais de 900 SKUs e produtos non-coffee | **[INTERPRETAÇÃO]** O contexto de negócio é mais amplo que uma única linha de produtos. |
| **Crescimento financeiro** | Faturamento apresentado de R$ 4,9 bi (2019) a R$ 14,1 bi (2025) | **[INTERPRETAÇÃO]** Empresa em crescimento segundo seus slides; evitar inferir a causa específica do crescimento. |
| **Execução curta com IA/tecnologia** | 9h10 de mão na massa, Kiro oficial, 5 desafios reais e pitch de 5+3 min | **[INTERPRETAÇÃO]** Priorizar prototipação demonstrável em prazo curto; os pesos da banca aparecem em F7. |

---

## 19. Possíveis frentes de investigação — hipóteses e não requisitos oficiais

Os **cinco temas gerais foram confirmados no slide 19**. As frentes abaixo são **[HIPÓTESES]** de pesquisa ou solução, não funcionalidades obrigatórias ou evidência de disponibilidade técnica. A delimitação do desafio escolhido exige conversar com seus mentores e obter os detalhes pertinentes.

1. **DNA da Máquina:** explorar identidade única do equipamento, reconciliação de relatos, análise de padrões e medição antes/depois de melhorias, desde que as bases reais permitam essa associação.
2. **Pedidos de Exportação:** o slide 28 já confirma entrada por e-mail/planilhas não padronizadas, consolidação Excel, cubagem/paletização manuais, redigitação e ausência de auditoria. Investigar amostras, regras logísticas, prioridades, autorização de integrações e indicadores antes de propor automações.
3. **Autoatendimento TRES:** distinguir procedimentos seguros de autodiagnóstico de casos que devem escalar ao suporte humano; confirmar limites técnicos e de segurança.
4. **CORA Vendas e CORA Gestor:** investigar dados e ações autorizadas por perfil, explicabilidade de recomendações e como avaliar a utilidade do copiloto/agente sem presumir acesso a APIs.
5. **Viabilidade de demonstração:** selecionar uma jornada clara, comprovável e compatível com o tempo, sempre respeitando a confidencialidade e identificando eventuais dados sintéticos.

### 19.1. Perguntas estratégicas a responder com os próximos materiais

- Para o **desafio escolhido**, quais são **causas-raiz**, segmentos afetados, fluxo atual, exceções e objetivo mensurável, além do enunciado geral do slide 19?
- **[ATUALIZADO]** Os passos operacionais e personas dos desafios **03–05** já foram revelados nos respectivos HTMLs oficiais, assim como as regras operacionais do desafio 02. Confirmar **as lacunas remanescentes do Desafio 03**: dados de volume/custo, segurança, procedimentos por máquina e integrações de atendimento; ver F8.
- Quais **dados, APIs, acessos, créditos exatos do Kiro/AWS ou recursos de mentoria** serão disponibilizados em cada desafio? (A ferramenta oficial e a oferta de suporte já foram confirmadas.)
- Qual é o **indicador principal** de sucesso? A organização forneceu uma meta e uma linha de base?
- Quais limitações existem: **tempo, orçamento, dados, LGPD, integração com sistemas, infraestrutura, segurança ou uso de IA**?
- O que será avaliado formalmente: **impacto no negócio, inovação, viabilidade, execução técnica, protótipo, pitch, implementação**? Quais são os pesos? O slide 20 já orienta a **demo funcional** mas não define pesos.
- Além de **5 min de pitch + 3 min de perguntas**, quais são os **arquivos, links, protótipos ou materiais obrigatórios** no envio das 16h30?
- Quais declarações da apresentação são **contexto institucional** e quais são **requisitos obrigatórios**?

---

## 20. Informações ainda indisponíveis — atualizadas após os HTMLs oficiais

**[PENDENTE]** Os briefings operacionais dos cinco desafios, a pergunta oficial do 03, os pesos de avaliação e os quatro entregáveis de cada briefing **já estão disponíveis**. Não tratá-los como faltantes. O foco atual é o **Desafio 03**.

- **Desafio 03:** **PDF original de 10 páginas já lido e incorporado na seção F11**. Manuais e guias rápidos integrais **de cada modelo ainda não lidos**. Obter a “resposta de e-mail 37” citada na ficha de vazamento, confirmar o conteúdo do “Mapa de Atendimento” mencionado no encaminhamento técnico e validar diferenças operacionais entre os modelos.
- **Números do 03:** período e base de cálculo dos 70%+, volume absoluto de chamados, distribuição por modelo e motivo, custo por chamado, tempo médio de atendimento, definições de falso defeito e medição oficial de deflexão. O HTML mostra as categorias principais, mas sem tabela numérica completa.
- **Escalonamento/segurança do 03:** fluxos permitidos para máquinas diferentes, limites de orientação automatizada, situações em que se deve interromper instruções, dados mínimos a enviar à assistência, autorizações para uso de conteúdo e se existe API de abertura de chamado. O briefing só solicita **simular o transbordo**, não garante integração real.
- **Hackathon:** canal/formato exato da submissão de código, README e protótipo, ordem de apresentação, regulamento completo (especialmente desempate e direitos), política de uso de serviços externos, e texto completo do termo de confidencialidade.
- **Acessos externos:** links de Drive e sites aparecem nos HTMLs, mas os respectivos arquivos e páginas **não foram examinados** nesta versão. Exigências/documentos desses recursos não devem ser inventados.
- **Material fotográfico:** slide 09, eventual sequência 29–35 e slides iniciais 01–03 não estão presentes nos lotes válidos. Os seis HTMLs complementam parte da informação mesmo na ausência dessas fotos.
- **Validação:** hipóteses de arquitetura/MVP, premissas de custo, indicadores simulados e possível business case só podem ser apresentados como **proposta de equipe** até verificação com mentores.

---

## 21. Catálogo e rastreabilidade das fotografias utilizadas

**Fonte primária:** imagens fornecidas pelo participante, do material projetado durante a apresentação **"Cafeína Week 2026 — Hackathon — Explore Novos Mundos"**. Os nomes abaixo identificam os arquivos de imagem do **lote correto** recebido neste projeto; são referências documentais e não URLs públicas.

| Ordem no lote correto | Arquivo | Número do slide mostrado | Assunto | Observação de consolidação |
|---:|---|---:|---|---|
| 1 | `IMG_1373(1).jpeg` | 04/35 | O que é o Cafeína | Definição do hub, desde 2022 |
| 2 | `IMG_1374(1).jpeg` | 05/35 | Por que estamos aqui | "Nenhuma empresa explora novos mundos sozinha" |
| 3 | `IMG_1375(1).jpeg` | 06/35 | Frentes do Cafeína Hub | Open, Ideias, +Tech e Week |
| 4 | `IMG_1376(1).jpeg` | 07/35 | Plataforma de inovação | Citação institucional |
| 5 | `IMG_1377(1).jpeg` | 08/35 | Jornada do Hub — parcial | 2022 e 2023 |
| 6 | `IMG_1378(1).jpeg` | 08/35 | Jornada do Hub — parcial | Acrescenta 2024 |
| 7 | `IMG_1379(1).jpeg` | 08/35 | Jornada do Hub — completa | Acrescenta 2025/26 |
| 8 | `IMG_1380(1).jpeg` | 10/35 | 3corações hoje | Portfólio, pessoas, fábricas e pontos de venda |
| 9 | `IMG_1383(1).jpeg` | 11/35 | Jornada da 3corações — parcial | Mostra 1959 e 2020 |
| 10 | `IMG_1384.jpeg` | 11/35 | Jornada da 3corações — parcial | Inclui 1959, 2020, 2022 e 2024; ainda sem 2026 e sem fases inferiores |
| 11 | `IMG_1385(1).jpeg` | 11/35 | Jornada da 3corações — atualização | Adiciona marco 2026: Yoki/Kitano, inovação, IA e AEVO |
| 12 | `IMG_1386(1).jpeg` | 11/35 | Jornada da 3corações — atualização ampliada | Foto alternativa dos marcos 1959–2026 |
| 13 | `IMG_1387(1).jpeg` | 11/35 | Jornada — quadro final | Acrescenta três fases estratégicas da companhia no rodapé |
| 14 | `IMG_1388(1).jpeg` | 12/35 | Crescimento da 3corações | Faturamento 2019–2025, CAGR, lucro operacional |
| 15 | `IMG_1389(1).jpeg` | 13/35 | Introdução ao hackathon | Slide de transição e comandos estilizados |
| 16 | `IMG_1390(1).jpeg` | 14/35 | O evento em números | 2 dias, 50 participantes, 10 equipes, 5 desafios, Kiro |
| 17 | `IMG_1391(1).jpeg` | 15/35 | Ferramenta Kiro | Créditos, workshop e suporte AWS |
| 18 | `IMG_1392(1).jpeg` | 16/35 | Programação do dia 1 | Horários de 13/10, workshop, trabalho em equipe |
| 19 | `IMG_1393(1).jpeg` | 17/35 | Programação do dia 2 | Horários de 14/10, envio final às 16h30 e apresentações |
| 20 | `IMG_1394(1).jpeg` | 18/35 | Premiação | Prêmios para os três primeiros lugares e brindes |
| 21 | `IMG_1395(1).jpeg` | 18/35 | Premiação — repetição | Foto alternativa, conteúdo já consolidado |
| 22 | `IMG_1396(1).jpeg` | 19/35 | Cinco desafios — parcial | Mostra os desafios 01, 02 e 03 |
| 23 | `IMG_1397(1).jpeg` | 19/35 | Cinco desafios — quadro completo | Acrescenta os desafios 04 e 05; enunciados e equipes A/B |
| 24 | `IMG_1398(1).jpeg` | 20/35 | Dinâmicas de apoio | AWS/FIAP, mentores, RH e pitch 5+3 minutos |
| 25 | `IMG_1400(1).jpeg` | 21/35 | Combinados | Sigilo dos desafios, Kiro, prazo e igualdade de regras |
| 26 | `IMG_1401(1).jpeg` | 22/35 | Mensagem motivacional | Participantes como a 'cafeína' nos dois dias |
| 27 | `IMG_1402(1).jpeg` | 23/35 | Transição para os desafios | Rótulos abreviados dos cinco desafios |
| 28 | `IMG_1403(1).jpeg` | 24/35 | Quem apoia cada desafio | Pessoas listadas para os cinco desafios |
| 29 | `IMG_1404(1).jpeg` | 25/35 | Desafio 01 — DNA da Máquina | Escopo G5 Passione/G4 Luna e pergunta-desafio |
| 30 | `IMG_1405(1).jpeg` | 26/35 | Desafio 01 — fluxo atual e falhas | Salesforce, técnico, P&D e ciclo de melhorias |
| 31 | `IMG_1406.jpeg` | 27/35 | Desafio 02 — Pedido sem Fronteiras | Contexto de exportação, área de internacionalização e pergunta-desafio |
| 32 | `IMG_1407.jpeg` | 28/35 | Desafio 02 — como funciona hoje | Quatro etapas do fluxo atual, dores por etapa e falta de auditoria |

**Nota:** fotografias de um mesmo slide são tratadas como **etapas da animação ou tomadas alternativas**, sem duplicação de fatos. Os slides **09 e 29–35** não foram recebidos; os slides **01–03** também não fazem parte desta base. **O slide 18 aparece duas vezes e o slide 19 em versão parcial e completa.**

---

## 22. Controle de versões e próximos lotes

| Versão | Data | Fontes incorporadas | Alterações |
|---|---|---|---|
| **0.1** | **2026-10-13** | 10 fotografias do lote correto; slides 04–08, 10–11 | Criação da base; definição do Cafeína; programas; histórico; métricas corporativas; linha do tempo da 3corações; pendências; rastreabilidade. |
| **0.2** | **2026-10-13** | **Mais 10 fotos**; slides 11 (animações finais) e 12–18; **20 fotos válidas acumuladas** | Acrescentada trajetória da companhia até 2026, fases estratégicas, faturamento/lucro, formato do hackathon, Kiro, suporte, agenda minuto a minuto, envio final, premiação, nova matriz de pendências e fontes. |
| **0.3** | **2026-10-13** | **Mais 10 fotos**, slide 18 (repetição) e slides 19–26; **30 fotos válidas acumuladas** | Cinco desafios oficiais e enunciados; sinônimos; detalhe inicial do desafio 01 (DNA da Máquina); fluxo atual e três dores; pitch 5+3 min; regras de confidencialidade; dinâmica de suporte; profissionais de apoio; atualização das pendências e rastreabilidade. |
| **0.4** | **2026-10-13** | **Mais 2 fotos**, slides **27–28**; **32 fotos válidas acumuladas** | Desafio 02 (Pedido sem Fronteiras): área, contexto internacional, pergunta oficial, quatro etapas do fluxo atual e respectivas dores, problema transversal de auditoria, hipóteses separadas de fatos, perguntas para mentores e atualização das pendências/fontes. |
| **0.5** | **2026-10-13** | **Seis documentos HTML oficiais**; preservadas **32 fotografias válidas** | Novo **foco no Desafio 03**: 70%+ de falsos defeitos, cinco modelos, 13 fichas resumidas, jornada em camadas, fontes/manuais, entregáveis, critérios 25/25/20/20/10, medição e hipóteses claramente marcadas. Complementos oficiais dos desafios 01, 02, 04 e 05; links e pendências. |
| **0.6** | **2026-10-13** | **PDF `fluxo(1).pdf` de 10 páginas**, revisados os dois HTMLs reenviados; preservadas as 32 fotografias válidas e os seis HTMLs distintos | **Seção F11 nova:** 13 fichas detalhadas com páginas, fluxo do formulário em quatro telas, desfechos Sim/Não, lacunas por modelo, dependência do e-mail 37, atenção a força mecânica e regras de segurança. Atualização de pendências e referências que diziam incorretamente que o PDF ainda não havia sido lido. |

**Procedimento para futuras atualizações:** preservar o nome e a unidade lógica deste arquivo; acrescentar conteúdo novo às seções pertinentes, atualizar tabelas e itens pendentes, reunir fotos progressivas de um mesmo slide sem duplicar informações e registrar a nova versão e as novas fontes. Quando houver novos fatos que contradigam ou atualizem material anterior, documentar essa mudança em vez de apagar silenciosamente o histórico.

---

## 23. Resumo de recuperação rápida para a IA

- **Evento:** Cafeína Week 2026, Hackathon, "Explore Novos Mundos".
- **Cafeína Hub:** hub/plataforma de inovação da 3corações, lançado em novembro de 2022, com interlocução com startups, universidades, colaboradores e novos talentos.
- **Programas:** **Cafeína Open** (desafios reais com ecossistema externo), **Cafeína Ideias** (melhorias internas), **Cafeína +Tech** (empoderamento digital), **Cafeína Week** (semana de inovação, incluindo hackathon em 2026).
- **Participação institucional citada:** FIAP e AWS no hackathon da Cafeína Week 2026, com suporte a prototipação, workshop Kiro e mentoria de negócio conforme a programação.
- **Hub — 2022:** lançamento e primeiro ciclo; **793 ideias** no primeiro ano de Cafeína Ideias.
- **Hub — 2023:** **R$ 1 milhão de ganhos estimados**; **141º** no Prêmio Valor Inovação.
- **Hub — 2024:** **R$ 8 milhões de ganhos estimados**; **439 startups** inscritas; **16 PoCs**; perto de **3 mil ideias** no terceiro ano; **114º** no Prêmio Valor Inovação Brasil.
- **Hub — 2025/26:** ciclo em andamento; menção a **58º** no ranking geral e **4º** na categoria alimentos e bebidas do Prêmio Valor Inovação (edição específica ainda não comprovada).
- **3corações — números apresentados:** mais de **30 marcas** e de **900 SKUs**, **15 fábricas em sete estados**, cerca de **12,7 mil colaboradores**, mais de **600 mil pontos de venda**, nº 1 em café no Brasil segundo a **ABIC**. Dados de fábricas, colaboradores e PDVs incluem compra de **Yoki e Kitano** (setembro de 2026), conforme rodapé do slide.
- **3corações — trajetória:** 1959, origem com João Alves de Lima em São Miguel/RN; 2020, transformação digital; 2022, Cafeína Hub, Mercafé e joint venture com Positive Brands; 2024, consumidor no centro, produtos *non-coffee* e ocasiões de consumo.
- **Mensagem institucional:** "Nenhuma empresa explora novos mundos sozinha"; negócios, resolução de problemas, oportunidades e construção de relacionamentos duradouros.
- **3corações — fase 2026 do slide 11:** apresentação atribui à empresa compra de **Yoki e Kitano**, **4ª mais inovadora de alimentos e bebidas**, "referência em IA" e inovação reconhecida pela **AEVO**. Não confundir autodescrição com certificação independente.
- **Fases estratégicas:** 1959–2017 **expandir**; 2017–2023 **orientada ao mercado**; a partir de 2024 **orientada ao consumidor**.
- **Faturamento (apresentação, slide 12):** **R$ 4,9 bi (2019)** → **R$ 7 bi (2021)** → **R$ 9,8 bi (2023)** → **R$ 14,1 bi (2025)**; **CAGR 19,3% ao ano (2019–2025)** e multiplicação apresentada de **2,9x**. **Lucro operacional 2025 de R$ 1,26 bi**, dito **3,5x o de 2024**.
- **Hackathon:** **13 e 14/10/2026, na FIAP**, **50 participantes** (IA, desenvolvimento, dados, design), **10 equipes de até 5**, **5 desafios reais de negócio**. Os **cinco enunciados gerais** estão no slide 19; **desafio 01** detalhado nos slides 25–26 e **desafio 02** nos slides 27–28.
- **Ferramenta oficial:** **Kiro, da AWS**, com créditos descritos como **equivalentes a um mês de trabalho para usar em dois dias** (sem números). **Vitor Hansen (AWS)** no workshop e como apoio; suporte AWS/FIAP e times de negócio. Exclusividade do Kiro **não confirmada**.
- **Dia 1 — 13/10:** 08h30 credenciamento, 09h abertura e desafios, 10h workshop Kiro (2h), 12h formação de times/distribuição (30min), 12h30 almoço, 14h prototipação (3h45), 17h45 check-out.
- **Dia 2 — 14/10:** 08h30 check-in, 08h45 talk de tecnologia (30min), 09h15 prototipação + speed dating RH (2h25), 11h40 orientação para pitch, 12h almoço, 13h30 construção final (3h), **16h30 envio final**, **17h apresentação (1h30)**, **18h30 banca**, **18h45 vencedores**.
- **Premiação — por integrante:** **1º TRES Touch + voucher Mercafé R$300**; **2º TRES Luna + voucher Mercafé R$150**; **3º TRES Luna**, sem voucher listado. **As três equipes vencedoras** recebem visita ao escritório da AWS; quem concluir ganha **caderno e adesivos**.
- **Desafio 01 — DNA da Máquina / Máquinas TRES:** histórico fragmentado das máquinas **G5 Passione** e **G4 Luna**; no fluxo atual há reclamação em **Salesforce**, diagnóstico/reparo técnico, chamados dispersos e análise manual pelo P&D; os três problemas declarados são **divergência entre relatos, relatórios trabalhosos e falta de comparação antes/depois de melhorias**.
- **Desafio 02 — Pedidos de Exportação / Pedido sem Fronteiras:** time de internacionalização; vendas externas principalmente para o **Mercosul**. Fluxo atual (slide 28): **(1) distribuidor envia planilha por e-mail, layouts variados → (2) exportação consolida Excel manualmente → (3) calcula cubagem, pallets e contêiner à mão → (4) redigita item a item no sistema corporativo**. Dores confirmadas: **sem padronização, fórmulas difíceis, erros/retrabalho logístico, redigitação e ausência de trilha de auditoria com dependência de poucas pessoas**. **[ATUALIZADO PELO HTML OF-02]** O briefing menciona SAP, Order Basis, quatro planilhas, fracionamento/volumetria e links para dados; **integração direta e arquivos externos ainda não examinados**.
- **Desafio 03 — Autoatendimento TRES (FOCO DO PARTICIPANTE):** **mais de 70% dos chamados técnicos são falsos defeitos**; cinco modelos **LOV, Modo, Passione, Luna, Touch** (Mimo fora); **13 fluxos**, quatro “Top motivos” (06 não extrai, 10 vazamento, 11 não puxa água, 12 bico entupido); guia + IA fundamentada em manuais + transbordo humano simulado + registro por camada são **pistas dos organizadores**, não arquitetura obrigatória. **PDF de 10 páginas já lido, com as 13 fichas completas na seção F11**. Ver seção prioritária F1–F11.
- **Desafio 04 — CORA Vendas:** copiloto conversacional que orienta o vendedor sobre a **próxima melhor ação para cada cliente da rota**.
- **Desafio 05 — CORA Gestor:** agente conversacional que ajuda gestores a **orientar vendedores e enxergar a equipe de vendas**.
- **Mentoria de negócio — slide 24:** 01 Jennifer Pontes, Lauro Rê, Thiago Costa; 02 Maria Cristina, Thiago Costa; 03 Jennifer Pontes, Lauro Rê, Thiago Costa; 04 Marcelo Sena, Elzevir Sá, Pablo Jesus, Camila, Thiago Costa; 05 Marcelo Sena, Elzevir Sá, Pablo Jesus, Thiago Costa.
- **Pitch:** **5 minutos de apresentação + 3 minutos de perguntas por equipe**; recomendação explícita de **mostrar protótipo funcionando: demonstração vale mais que slide**.
- **Regras do slide 21:** respostas de mentor para um desafio valem para suas duas equipes; **informações dos desafios são confidenciais**, conforme termo assinado; Kiro é oficial; envio fecha 14/10 às 16h30.
- **ALERTA PRINCIPAL (v0.6):** briefings 01–05 e critérios de julgamento foram **recebidos em HTML**; o **PDF de 10 páginas do fluxo do Desafio 03 já foi examinado e transcrito estruturadamente**. Ainda faltam **manuais/guias específicos das máquinas, e-mail 37, regras reais de transbordo, métricas absolutas e valores-base, canal final de envio, regulamento completo e acesso autorizado a bases**. O material menciona **confidencialidade contratual**: antes de adicionar estas informações a serviços ou Sources externos, verificar o termo e obter autorização apropriada. Não apresentar hipóteses como fatos do briefing.


**NOTA FINAL DA VERSÃO 0.6:** Esta base única preserva os seis documentos HTML oficiais e as 32 fotografias válidas, e agora contém as **13 fichas detalhadas do PDF original**, além das telas e dos dois desfechos (F11). O foco permanece no Desafio 03; os demais desafios servem apenas de contexto. As instruções operacionais precisam ser validadas por modelo e por segurança antes de uso público.
