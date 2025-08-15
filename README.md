# Pizzashop Web

Este é o repositório do **Pizzashop Web**, uma aplicação web completa para a gestão de uma pizzaria. O projeto foi desenvolvido com tecnologias do ecossistema React, com foco em performance, escalabilidade e uma ótima experiência de usuário, incluindo interface otimista.

## Stacks Utilizadas

Este projeto foi construído com as seguintes tecnologias:

  - **React**: Biblioteca para construção de interfaces de usuário.
  - **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
  - **Vite**: Ferramenta de build extremamente rápida para desenvolvimento web moderno.
  - **React Router DOM**: Para gerenciamento de rotas na aplicação.
  - **Tailwind CSS**: Framework de CSS utility-first para estilização rápida e customizável.
  - **shadcn/ui**: Componentes de UI reusáveis e acessíveis.
  - **Radix UI**: Primitivos de UI de baixo nível para construção de componentes de alta qualidade.
  - **React Query (TanStack Query)**: Para fetching, caching e atualização de dados de forma eficiente.
  - **ESLint**: Para linting e padronização de código.

## ✨ Funcionalidades

A aplicação conta com um dashboard administrativo completo, que inclui:

  - **Dashboard com Métricas**:
      - Gráfico de pedidos dos últimos 15 dias.
      - Gráfico de faturamento dos últimos 15 dias.
      - Média de avaliações (mensal e geral).
      - Média de pedidos por dia (mensal e geral).
  - **Gerenciamento de Pedidos**:
      - Listagem e filtragem de pedidos.
      - Detalhes do pedido.
      - Alteração de status do pedido.
  - **Gerenciamento de Cardápio**:
      - Criação, edição e exclusão de produtos.
  - **Autenticação**:
      - Sistema de login com JWT (JSON Web Token).
  - **Perfil da Loja**:
      - Edição das informações do restaurante.

## 🏁 Começando

Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento local.

**Pré-requisitos:**

  - [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
  - [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

**1. Clone o repositório:**

```bash
git clone https://github.com/Ianalas/pizzashop-web.git
cd pizzashop-web
```

**2. Instale as dependências:**

```bash
npm install
# ou
yarn install
```

**3. Configure as variáveis de ambiente:**

Renomeie o arquivo `.env.example` para `.env` e adicione as variáveis de ambiente necessárias.

```env
VITE_API_URL=http://localhost:3333
```

**4. Rode a aplicação:**

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📚 Aprendizados Importantes

Este projeto foi uma ótima oportunidade para aprender e aplicar conceitos importantes, como:

  - **Autenticação JWT**: Implementação de um fluxo de autenticação seguro.
  - **Caching e Revalidação**: Estratégias de cache com React Query para otimizar o carregamento de dados.
  - **Conexão com Back-end (API)**: Consumo de uma API RESTful para todas as operações da aplicação.
  - **Testes Unitários**: Configuração e escrita de testes para garantir a qualidade do código.
  - **Componentização**: Criação de componentes reutilizáveis e de alta qualidade com shadcn/ui e Radix.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

-----
