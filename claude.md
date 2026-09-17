# TabletopVTT — Reinos de Ferro

## 1. Sobre o projeto

Este é um TabletopVTT pessoal para jogar **Reinos de Ferro** com familiares e amigos.

O projeto não é uma plataforma comercial e não precisa ser preparado para milhares ou milhões de usuários.

O objetivo é construir um sistema:

* funcional;
* bonito;
* responsivo;
* rápido;
* automatizado;
* fácil de manter;
* barato ou gratuito para hospedar;
* adequado para computadores modestos e celulares.

### Princípio principal

**Qualidade profissional não significa complexidade desnecessária.**

Sempre buscar a solução mais simples que resolva corretamente o problema.

Evitar overengineering, abstrações desnecessárias, infraestrutura complexa ou tecnologias que não tragam benefício real para o tamanho e objetivo deste projeto.

---

# 2. Fontes de informação

O projeto possui duas fontes principais de referência.

## Manual de Reinos de Ferro

O manual fornecido no projeto é a fonte de verdade para as regras do RPG.

Antes de implementar uma mecânica do jogo, consultar o manual quando necessário.

Não inventar regras.

Quando uma regra estiver ambígua, incompleta ou houver mais de uma interpretação possível, pesquisar o manual e, se a dúvida permanecer, perguntar ao usuário.

## Projeto antigo

O projeto antigo existe como referência.

Ele pode ser utilizado para entender:

* funcionalidades;
* dados;
* entidades;
* relacionamentos;
* regras já implementadas;
* comportamentos;
* decisões anteriores;
* problemas conhecidos.

Não assumir que a arquitetura ou as decisões do projeto antigo devem ser mantidas.

Reaproveitar somente aquilo que fizer sentido para a nova arquitetura.

---

# 3. Banco de dados

O banco de dados é uma parte central da aplicação.

Ele deve armazenar tanto o estado persistente do jogo quanto os dados estáticos necessários para o funcionamento do RPG.

## Dados estáticos

Quando aplicável, o banco deve conter informações como:

* carreiras;
* atributos;
* perícias;
* talentos;
* habilidades;
* itens;
* armas;
* armaduras;
* equipamentos;
* magias;
* listas de magias;
* condições;
* efeitos;
* modificadores;
* regras configuráveis;
* categorias;
* demais dados de referência do RPG.

## Dados dinâmicos

Também devem ser armazenados dados como:

* personagens;
* inventários;
* equipamentos utilizados;
* valores atuais;
* recursos;
* condições atuais;
* combates;
* participantes;
* turnos;
* ações;
* demais estados persistentes do jogo.

## Não duplicar dados

Definições estáticas devem existir uma única vez sempre que possível.

Exemplo:

Se uma arma existir no sistema, sua definição deve existir uma vez.

Personagens devem referenciar essa arma através de IDs e relacionamentos, armazenando somente informações específicas daquela posse quando necessário.

Não copiar a definição completa da arma para cada personagem.

O mesmo princípio deve ser aplicado a itens, talentos, magias, carreiras, perícias e outras entidades reutilizáveis.

Priorizar:

* normalização adequada;
* relacionamentos claros;
* integridade dos dados;
* IDs e chaves apropriadas;
* índices úteis;
* baixo consumo;
* facilidade de manutenção.

Não utilizar estruturas complexas ou excessivamente genéricas sem uma necessidade real.

---

# 4. Manual → Banco → Rules Engine

O manual é a fonte de verdade das regras.

O banco é a fonte operacional dos dados utilizados pela aplicação.

O Rules Engine interpreta esses dados e executa as regras.

A aplicação não deve depender do PDF durante a execução.

A arquitetura conceitual é:

**Manual → dados estruturados → Banco → Rules Engine → API → Interface**

---

# 5. Rules Engine

As regras importantes do RPG devem ser centralizadas em um Rules Engine.

O Rules Engine deve interpretar os dados do banco e executar as regras do jogo.

Sempre que fizer sentido, deve lidar com:

* criação de personagem;
* atributos;
* perícias;
* talentos;
* equipamentos;
* armas;
* armaduras;
* ataques;
* defesa;
* dano;
* modificadores;
* condições;
* efeitos;
* ações;
* custos de ações;
* fadiga;
* munição;
* iniciativa;
* turnos;
* recursos;
* validações;
* limitações;
* consequências das ações.

A mesma lógica deve ser utilizada na ficha e no combate.

Evitar duplicar regras entre frontend, ficha, combate e outras partes da aplicação.

---

# 6. Automação

O sistema deve automatizar o máximo possível das tarefas mecânicas do RPG.

O jogador deve tomar as decisões que pertencem ao jogador.

O sistema deve realizar automaticamente os cálculos, validações e consequências.

Por exemplo, ao executar um ataque, o sistema pode precisar verificar:

* ações disponíveis;
* arma;
* munição;
* atributos;
* perícias;
* modificadores;
* condições;
* regras aplicáveis;
* resultado do ataque;
* defesa;
* dano;
* efeitos;
* fadiga;
* consumo de recursos;
* atualização do turno.

A automação deve reduzir cálculos e tarefas manuais sem retirar do jogador as decisões próprias do jogo.

---

# 7. Arquitetura

Separar responsabilidades de maneira clara, sem criar complexidade desnecessária.

### Banco

Responsável por armazenar dados estáticos e estado persistente.

### Backend / Rules Engine

Responsável por:

* regras;
* cálculos;
* validações;
* automações;
* processamento;
* atualização do estado.

### API

Responsável por fornecer ao frontend os dados e resultados necessários de forma eficiente.

Sempre que possível, evitar obrigar o frontend a realizar várias requisições pequenas para obter informações relacionadas.

### Frontend

Responsável principalmente por:

* apresentação;
* interação;
* entrada do jogador;
* exibição de informações;
* exibição dos resultados do Rules Engine.

As regras principais do RPG não devem ficar espalhadas pelo frontend.

---

# 8. Performance

Performance é importante, mas proporcional ao tamanho real do projeto.

O sistema deve funcionar bem em:

* computadores comuns;
* notebooks modestos;
* celulares;
* conexões razoáveis.

Evitar desperdícios como:

* N+1 queries;
* consultas repetidas;
* chamadas desnecessárias;
* dados duplicados;
* processamento duplicado;
* payloads excessivos;
* renderizações desnecessárias;
* bibliotecas pesadas sem necessidade.

Preferir:

* consultas eficientes;
* índices adequados;
* dados consolidados quando apropriado;
* carregamento sob demanda;
* reutilização de dados estáticos;
* cache quando realmente fizer sentido;
* persistência somente das alterações necessárias.

Não criar sistemas avançados de cache, filas, microsserviços ou infraestrutura semelhante sem necessidade real.

---

# 9. Interface e UX

A interface deve parecer um TabletopVTT de RPG, e não simplesmente um CRUD.

Priorizar:

* hierarquia visual;
* clareza;
* navegação simples;
* boa organização das informações;
* feedback das ações;
* estados de carregamento;
* estados vazios;
* mensagens de erro claras;
* consistência visual;
* experiência durante o combate;
* experiência durante a criação de personagem.

Utilizar os recursos de design disponíveis, incluindo Claude Design quando apropriado.

Evitar efeitos visuais excessivos ou elementos que prejudiquem performance.

Bonito deve significar **bem projetado e funcional**, não simplesmente cheio de efeitos.

---

# 10. Responsividade

O sistema deve ser responsivo desde o início.

Não tratar mobile como uma adaptação posterior.

A aplicação deve ser utilizável em:

* desktop;
* notebook;
* tablet;
* celular.

Em telas pequenas, priorizar:

* controles fáceis de tocar;
* boa legibilidade;
* navegação simples;
* informações importantes;
* componentes adaptáveis;
* baixo consumo de recursos.

---

# 11. Recursos disponíveis

Utilizar os recursos disponíveis no ambiente quando eles puderem melhorar o resultado.

Isso inclui, quando pertinente:

* Claude Design;
* plugins;
* MCPs;
* skills;
* agentes especializados;
* subagentes;
* repertórios e referências baixados;
* ferramentas de desenvolvimento;
* ferramentas de testes;
* ferramentas de análise;
* ferramentas de validação.

Avaliar qual recurso é adequado para cada tarefa.

Não utilizar ferramentas apenas por obrigação.

Também não ignorar ferramentas especializadas que possam melhorar significativamente a qualidade, precisão ou velocidade do trabalho.

---

# 12. Agentes e subagentes

Utilizar agentes ou subagentes quando uma tarefa puder se beneficiar de análise especializada ou paralela.

Exemplos:

* análise do banco;
* análise do projeto antigo;
* análise do manual;
* arquitetura;
* UI/UX;
* performance;
* testes;
* revisão.

Quando múltiplas análises forem realizadas, consolidar os resultados antes de tomar decisões.

Não criar complexidade apenas para utilizar agentes.

---

# 13. Autonomia

Se uma dúvida puder ser resolvida com segurança através de:

* código;
* banco;
* manual;
* projeto antigo;
* documentação disponível;
* ferramentas disponíveis;

resolva autonomamente.

Não interromper o trabalho por dúvidas pequenas.

Porém, perguntar ao usuário quando houver uma dúvida real sobre:

* regra do RPG;
* requisito funcional;
* comportamento esperado;
* decisão arquitetural importante;
* mudança de tecnologia;
* alteração destrutiva;
* informação que não possa ser determinada com segurança.

**É melhor fazer uma pergunta objetiva do que assumir algo errado.**

---

# 14. Processo de desenvolvimento

Para tarefas relevantes, seguir este fluxo:

1. Entender o problema.
2. Analisar o contexto existente.
3. Consultar o manual quando necessário.
4. Verificar banco e código relacionados.
5. Avaliar ferramentas e recursos disponíveis.
6. Planejar a solução.
7. Implementar.
8. Testar.
9. Revisar.
10. Corrigir problemas.
11. Validar o resultado.

Não considerar uma tarefa concluída apenas porque o código foi escrito.

Quando disponíveis e pertinentes, executar:

* testes;
* lint;
* typecheck;
* build;
* validações do banco;
* verificações de integração.

Os testes e a documentação devem ser proporcionais ao tamanho e à importância do projeto.

---

# 15. Segurança das alterações

Antes de alterações destrutivas:

* verificar dependências;
* entender o impacto;
* preservar dados importantes;
* pedir confirmação quando necessário.

Não remover funcionalidades ou dados apenas porque parecem antigos.

Primeiro verificar se ainda são utilizados.

---

# 16. Código

Priorizar código:

* simples;
* legível;
* modular;
* reutilizável;
* eficiente;
* testável;
* fácil de manter.

Evitar:

* código duplicado;
* abstrações desnecessárias;
* complexidade artificial;
* soluções excessivamente genéricas;
* arquitetura empresarial sem necessidade.

Quando duas soluções forem equivalentes, preferir a mais simples.

---

# 17. Princípio geral

Sempre considerar o sistema como um produto completo:

**Manual → Banco → Rules Engine → Backend/API → Frontend → UX → Mobile → Performance → Testes**

O objetivo é construir um TabletopVTT pessoal, automatizado e agradável de utilizar, mantendo a implementação simples, eficiente e sustentável.

**Não construir para uma escala que o projeto não precisa.**

Construir exatamente o que o projeto precisa, mas fazê-lo bem.
