...existing code...

# TechTi — Corporate Website

Tutorial de uso

1. Requisitos: Node.js (recomendado >= 16) e npm/yarn/pnpm.
2. Instalar dependências:
   - npm install
3. Rodar em desenvolvimento:
   - npm run dev
4. Gerar build:
   - npm run build
5. Rodar em produção:
   - npm run start

Link do projeto em produção:

Arquitetura do projeto (visão geral)

- app/ — raiz da aplicação (Next.js app router)
  - pages/ — rotas e páginas. Cada pasta aqui representa uma rota; os elementos individuais daquela página (componentes e hooks específicos) devem ficar dentro da pasta da página.
    - Ex.: app/pages/home, app/pages/manutencao
  - components/ — componentes globais reutilizáveis (botões, inputs, Layout, FAQ, TwoColumnSection, etc.). Coloque aqui componentes usados por várias páginas.
  - styles/ — estilos globais, utilitários de estilo e componentes de estilo compartilhados (ex.: GradientText, variáveis SCSS).
  - utils/ — helpers e hooks globais (ex.: hooks customizados, formatters, fetch utilities). Conforme combinado, hooks globais vão aqui.
  - public/ — assets estáticos (imagens, ícones, favicons).
  - app/components/<page>-components ou app/pages/<page>/components — componentes específicos de uma página devem ficar dentro da pasta da própria página (ex.: app/pages/manutencao/components). Mesmo para hooks/logic que só pertencem a essa página, mantenha-os dentro da pasta da página.

Princípios e convenções

- Componentes globais: app/components/\*
- Hooks/utilitários globais: app/utils/_ (ou app/hooks/_ conforme preferência do time)
- Componentes e hooks específicos de página: dentro da pasta da página em app/pages/<rota>/
- Rotas: definidas em app/pages — tudo relacionado à rota (componentes, subcomponentes e assets locais) deve ficar nessa pasta
- Estilos: prefira css/scss modules por componente em parity com a pasta do componente; styles/ para temas e utilitários globais

Boas práticas rápidas

- Manter componentes pequenos e reutilizáveis em app/components.
- Evitar dependências cruzadas entre páginas; usar app/utils para shared logic.
- Tipar props com TypeScript e manter contratos claros entre componentes.
- Assets específicos de página junto à pasta da página; assets globais em public/.
