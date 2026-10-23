# SOMA AI Web

Versão web independente do app local SOMA AI. Depois de hospedada como site estático, ela não exige que o computador do proprietário fique ligado.

## O que já está implementado
- Interface responsiva com tema roxo/escuro.
- Conversas de demonstração, nova conversa e histórico no armazenamento local do navegador.
- Sugestões para Roblox/Luau, criação de sites e organização de ideias.
- Copiar resposta e atalhos de teclado.
- Sem bibliotecas JavaScript obrigatórias.

## Limitação importante
O chat está em modo de demonstração. As respostas são textos locais definidos em `script.js`, não conteúdo gerado por uma IA. Para ativar respostas reais, conecte um backend/serverless function a um provedor de IA. **Nunca coloque chaves de API em arquivos públicos.**

## Publicação
Em Settings → Pages, selecione Deploy from a branch, branch `main`, pasta `/(root)`, e salve. O endereço esperado é `https://studiogc.github.io/gccorelabs/` depois que GitHub Pages estiver ativado e a publicação terminar.

## Arquivos
- `index.html` — estrutura.
- `style.css` — visual responsivo.
- `script.js` — chat de demonstração e histórico local.
- `favicon.svg` — ícone.
