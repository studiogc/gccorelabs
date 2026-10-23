# SOMA AI Web Edition

Site independente do projeto SOMA AI, com interface responsiva para computador e celular. Depois de publicado em hospedagem estática, o computador do proprietário não precisa ficar ligado.

## Incluído nesta edição

- **Visão geral:** atalhos e estado dos módulos.
- **SOMA Assistente:** conversas de demonstração, histórico local e copiar respostas.
- **Projetos e memória:** criar, editar e apagar notas locais.
- **Laboratório de código:** rascunho Luau/JavaScript/HTML/CSS/texto, copiar e baixar arquivo.
- **Monitor do sistema:** interface preparada para métricas; sem leitura real de CPU/RAM/disco pelo navegador.
- **DX-1:** checklist manual seguro e exportação de relatório.
- **Performance Engine:** perfis de recomendações, sem alterar o Windows.
- **Game Center:** atalhos para páginas oficiais do Roblox, Roblox Studio e Minecraft.
- **GC Protection:** orientações de segurança e privacidade.
- **Voz:** tela de preparação, sem captura de áudio.
- **Configurações:** nome de exibição, modo compacto, reduzir animações, exportar e apagar dados locais.
- Layout adaptável a celular e manifesto de aplicação web.

## Limitações atuais — importante

Esta é a **versão web de interface**, não um agente de sistema nem uma IA completa:
- As respostas do chat são textos locais de demonstração. Nenhum modelo de IA está conectado.
- Conversas, notas, preferências e rascunhos ficam no armazenamento do navegador; não há contas reais nem sincronização entre dispositivos.
- O site não lê CPU, RAM, disco, processos ou temperatura reais e não controla o Windows.
- Os botões do Game Center abrem páginas oficiais; não iniciam programas instalados.
- Voz e monitoramento real ainda exigem implementação.

## Próximas etapas técnicas

1. Publicar o site com GitHub Pages.
2. Implementar backend seguro para contas, sincronização e provedor de IA; nunca colocar chaves secretas em JavaScript público.
3. Desenvolver um agente Windows separado, com permissões mínimas e consentimento explícito, para métricas locais.
4. Implementar voz por um provedor apropriado e controles claros de permissão.
5. Testar no celular e em navegadores diferentes.

## Publicação no GitHub Pages

No repositório, abra **Settings → Pages**. Em **Build and deployment**, selecione **Deploy from a branch**, branch `main`, pasta `/(root)` e salve. Quando a publicação terminar, o endereço esperado é:

https://studiogc.github.io/gccorelabs/

A URL só estará disponível depois de ativar o Pages e concluir a publicação.

## Arquivos principais

- `index.html` — estrutura e módulos da interface.
- `style.css` — visual responsivo.
- `script.js` — navegação e funcionalidades locais.
- `manifest.webmanifest` — metadados para instalação como web app.
- `favicon.svg` — ícone.
