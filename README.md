# 📱 Estudo de Caso - Aplicação de Produtos

Projeto desenvolvido para estudo de caso sobre desenvolvimento profissional, implementando uma aplicação completa com versões Web e Mobile.

## 📋 Descrição do Projeto

Aplicação dividida em duas partes que simula uma listagem de produtos com navegação e consumo de API REST:

- **Web**: Aplicação React com Vite
- **Mobile**: Aplicação React Native com Expo

Ambas as aplicações consomem a mesma API REST de produtos e implementam navegação entre telas.

## 🚀 Tecnologias Utilizadas

### Web
- React 18
- Vite
- React Router DOM
- Axios
- React Bootstrap
- Bootstrap 5

### Mobile
- React Native
- Expo
- React Navigation
- Axios
- React Native Paper

## 📁 Estrutura do Projeto

```
meu-estudo-caso/
├── web/                    # Aplicação Web
│   ├── src/
│   │   ├── componentes/   # Componentes reutilizáveis
│   │   ├── paginas/       # Páginas da aplicação
│   │   ├── servicos/      # Configuração da API
│   │   └── App.jsx
│   └── package.json
├── mobile/                 # Aplicação Mobile
│   ├── src/
│   │   ├── componentes/   # Componentes reutilizáveis
│   │   ├── telas/         # Telas da aplicação
│   │   ├── navegacao/     # Configuração de rotas
│   │   └── servicos/      # Configuração da API
│   └── package.json
└── README.md              # Este arquivo
```

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Para mobile: Expo Go instalado no celular

### Aplicação Web

```bash
# Navegar para a pasta web
cd web

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

A aplicação estará disponível em: `http://localhost:5173`

### Aplicação Mobile

```bash
# Navegar para a pasta mobile
cd mobile

# Instalar dependências
npm install

# Iniciar o Expo
npx expo start

# Ou usar
npm start
```

Escaneie o QR Code com o aplicativo Expo Go para visualizar no celular.

## 🛣️ Rotas Implementadas

### Web (React Router DOM)

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | PaginaInicial | Lista todos os produtos disponíveis |
| `/produto/:id` | PaginaDetalhes | Exibe detalhes de um produto específico |

### Mobile (React Navigation)

| Tela | Navegação | Descrição |
|------|-----------|-----------|
| TelaInicial | Stack Navigator | Lista de produtos com botões |
| TelaDetalhes | Stack Navigator | Detalhes do produto selecionado |

## 🌐 API Utilizada

**Base URL**: `https://proweb.leoproti.com.br`

**Endpoints**:
- `GET /api/produto` - Lista todos os produtos
- `GET /api/produto/{id}` - Busca produto por ID

**Documentação Swagger**: https://proweb.leoproti.com.br/swagger-ui/index.html

## 📦 Deploy

### Web (Vercel)

A aplicação web está configurada para deploy no Vercel:

1. Crie uma conta no [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Selecione a pasta `web/` como diretório raiz
4. O Vercel detectará automaticamente o Vite
5. Clique em "Deploy"

**Configurações de build**:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## 🎯 Funcionalidades

### Web
✅ Listagem de produtos com cards responsivos  
✅ Navegação para detalhes do produto  
✅ Botão de voltar para página inicial  
✅ Design responsivo com Bootstrap  
✅ Loading states durante requisições  
✅ Tratamento de erros

### Mobile
✅ Tela inicial com lista de produtos  
✅ Navegação entre telas com React Navigation  
✅ Tela de detalhes com informações completas  
✅ Interface nativa com React Native Paper  
✅ Feedback visual de carregamento  
✅ Tratamento de erros

## 📚 Recursos e Referências

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)

## 👨‍💻 Desenvolvimento

### Web
O projeto web utiliza React com Vite para um desenvolvimento rápido e moderno. A estrutura segue boas práticas:

- **Componentes**: Componentes reutilizáveis isolados
- **Páginas**: Componentes de página que utilizam os componentes base
- **Serviços**: Centralização da configuração da API

### Mobile
O projeto mobile usa Expo para facilitar o desenvolvimento React Native:

- **Telas**: Componentes de tela completos
- **Componentes**: Componentes reutilizáveis
- **Navegação**: Configuração centralizada de rotas
- **Serviços**: Cliente API compartilhado

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

## ✨ Créditos

Desenvolvido como parte do estudo de caso sobre Desenvolvimento Profissional.

**Recursos utilizados**:
- API de Produtos fornecida por proweb.leoproti.com.br
- Tutoriais de React Router DOM e React Navigation
- Documentação oficial do React, React Native e Expo
