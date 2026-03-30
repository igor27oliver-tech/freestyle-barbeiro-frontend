# Freestyle Barbeiro - Frontend

## Nome do projeto
**Freestyle Barbeiro Frontend**

## Objetivo
Este projeto é o frontend do sistema **Freestyle Barbeiro**, desenvolvido em **React + Vite**, com foco em uma interface moderna, responsiva e profissional para consumir a API Spring Boot de agendamento da barbearia.

O sistema permite cadastrar agendamentos, consultar horários disponíveis, gerenciar assinaturas de clientes e visualizar informações administrativas em um painel organizado.

## Tecnologias
- React
- Vite
- JavaScript
- Axios
- React Router DOM
- CSS
- Integração com API REST

## Funcionalidades
- Dashboard com visão geral
- Cadastro de agendamento
- Consulta de horários disponíveis
- Lista de agendamentos
- Cadastro de assinatura
- Lista de assinaturas
- Painel administrativo
- Integração com backend Spring Boot
- Layout responsivo para desktop e mobile
- Tratamento de loading, erro e estado vazio

## Visual do sistema
O projeto foi desenvolvido com uma proposta visual mais sofisticada, usando uma identidade escura e elegante inspirada em barbearias modernas.

## Imagens do sistema
Adicione aqui capturas de tela do frontend.

### Dashboard
![Dashboard](./assets/dashboard.png)

### Novo agendamento
![Novo agendamento](./assets/novo-agendamento.png)

### Painel administrativo
![Painel administrativo](./assets/painel-admin.png)

> Se ainda não tiver as imagens, pode deixar essa parte para depois.

## Integração com a API

A aplicação consome a API local em:

```text
http://localhost:8080
```

### Endpoints utilizados

#### Agendamento
- `POST /agendamento/criar`
- `GET /agendamento/test`
- `POST /agendamento/horarios`

#### Admin
- `GET /adm/agendamentos`

#### Assinatura
- `POST /assinatura/assinar`
- `GET /assinatura/listaCompleta`

## Estrutura do projeto

```
src/
├── components/
│   ├── agendamentos/
│   │   ├── AdminAgendamentosTable.jsx
│   │   ├── AgendamentoForm.jsx
│   │   ├── AgendamentoTable.jsx
│   │   └── HorariosForm.jsx
│   ├── assinaturas/
│   │   ├── AssinaturaForm.jsx
│   │   └── AssinaturaTable.jsx
│   ├── dashboard/
│   │   └── StatCard.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── Sidebar.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── EmptyState.jsx
│       ├── ErrorState.jsx
│       ├── Input.jsx
│       ├── Loader.jsx
│       └── SectionTitle.jsx
├── hooks/
│   └── useAsync.js
├── pages/
│   ├── AdminPage.jsx
│   ├── AgendamentosPage.jsx
│   ├── AssinaturaPage.jsx
│   ├── AssinaturasPage.jsx
│   ├── DashboardPage.jsx
│   ├── HorariosPage.jsx
│   └── NovoAgendamentoPage.jsx
├── routes/
│   └── AppRouter.jsx
├── services/
│   ├── agendamentoService.js
│   ├── api.js
│   └── assinaturaService.js
├── utils/
│   ├── constants.js
│   └── format.js
├── App.jsx
├── main.jsx
└── index.css
```

## Organização

- **pages** → páginas principais do sistema
- **components** → componentes reutilizáveis
- **services** → comunicação com a API
- **hooks** → lógica reutilizável
- **utils** → funções auxiliares
- **routes** → rotas da aplicação

## Como rodar o projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar a API

Crie ou confira o arquivo `.env` no diretório raiz:

```env
VITE_API_URL=http://localhost:8080
```

### 3. Rodar em desenvolvimento
```bash
npm run dev
```

Depois acesse:
```
http://localhost:5173
```

## Requisitos

Para o sistema funcionar corretamente:

- ✅ O backend Spring Boot deve estar rodando
- ✅ A API deve estar disponível em `http://localhost:8080`
- ✅ O backend deve permitir acesso via CORS para o frontend local

### Exemplo de CORS no Spring Boot

```java
@CrossOrigin(origins = "http://localhost:5173")
```

## Destaques do projeto

- ✨ Interface moderna e profissional
- 🏗️ Arquitetura organizada para crescimento
- 🔄 Componentes reutilizáveis
- 🔐 Separação clara entre interface e consumo da API
- 🚀 Projeto preparado para futuras melhorias

## Melhorias futuras

- 🔐 Autenticação de administrador
- 📅 Filtro por data
- 🔍 Busca por cliente
- ✏️ Edição e exclusão de registros
- 🔔 Notificações de sucesso e erro
- 📊 Gráficos no dashboard
- 🎨 Tema customizável
- ☁️ Deploy em produção

## Autor

Projeto desenvolvido por **Igor Ribeiro Cardoso de Oliveira**.
