# 💎 StyleSync - Landing Page

<div align="center">
  
  ![StyleSync Banner](./capa1.png)
  
  <p align="center">
    <strong>Seu stylist pessoal, sempre disponível ✨</strong>
  </p>
  
  <p align="center">
    Landing page moderna e elegante para plataforma de consultoria de moda personalizada
  </p>

  <p align="center">
    <a href="https://erikalaiane.github.io/stylesync-landing/">🌐 Ver Demo</a>
    ·
    <a href="#-sobre">📖 Sobre</a>
    ·
    <a href="#-tecnologias">🛠️ Tecnologias</a>
    ·
    <a href="#-contato">💌 Contato</a>
  </p>

  ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-8B1538?style=for-the-badge)

</div>

---

## Sobre

**StyleSync** é uma landing page desenvolvida para uma plataforma de consultoria de moda personalizada. O projeto apresenta um design moderno e elegante com paleta de cores vinho e dourado, criando uma experiência visual sofisticada e envolvente.

### Características

-  **Design Elegante**: Paleta de cores vinho e dourado cuidadosamente selecionada
-  **Responsivo**: Totalmente adaptável para todos os dispositivos
-  **Performance**: Otimizado com Vite para carregamento ultra-rápido
-  **Animações**: Transições e efeitos suaves que encantam
-  **Componentizado**: Arquitetura modular com React
-  **SEO Friendly**: Estrutura otimizada para mecanismos de busca

---

## Preview

<div align="center">
  
  ![Desktop View](./capa1.png)
  
  ![Mobile View](./capa2.png)

</div>

---

## Tecnologias

Este projeto foi construído com as seguintes tecnologias:

### Core

- **[React](https://react.dev/)** `18.3.1` - Biblioteca JavaScript para construção de interfaces
- **[Vite](https://vitejs.dev/)** `5.4.10` - Build tool de nova geração
- **[Tailwind CSS](https://tailwindcss.com/)** `3.4.15` - Framework CSS utility-first

### Ferramentas de Desenvolvimento

- **[ESLint](https://eslint.org/)** - Linter para identificar e reportar padrões no código
- **[PostCSS](https://postcss.org/)** - Ferramenta para transformar CSS com JavaScript
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Plugin PostCSS para adicionar prefixos de fornecedores

### Plugins

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - Plugin oficial do React para Vite
- **[vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)** - Plugin para importar SVGs como componentes React

---

## Começando

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/erikalaiane/stylesync-landing.git
```

2. Entre no diretório do projeto
```bash
cd stylesync-landing
```

3. Instale as dependências
```bash
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

5. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

---

## Build

Para criar a versão de produção:

```bash
npm run build
# ou
yarn build
```

Para preview da build:

```bash
npm run preview
# ou
yarn preview
```

---

## Estrutura do Projeto

```
stylesync-landing/
├── public/              # Arquivos públicos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Expertise.jsx
│   │   ├── Featured.jsx
│   │   ├── WhyStyleSync.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Team.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entry point
│   └── index.css        # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js   # Configuração do Tailwind
└── vite.config.js       # Configuração do Vite
```

---

## Paleta de Cores

```css
/* Vinho */
--primary: #8B1538
--primary-dark: #6B0F2A
--primary-light: #B91D47

/* Dourado */
--accent: #D4AF37
--accent-light: #F4D03F
--accent-dark: #B8941F

/* Secundário */
--secondary: #2D1B2E
--secondary-light: #4A2F4D

/* Pop */
--pop: #E91E63
--pop-light: #F48FB1
```

---

## Funcionalidades

- ✅ Header fixo com efeito de scroll
- ✅ Hero section com gradiente e animações
- ✅ Seção "Como Funciona" com cards interativos
- ✅ Grid de especialidades com hover effects
- ✅ Banner de promoção destacado
- ✅ Cards de benefícios
- ✅ Tabela de preços comparativa
- ✅ Depoimentos de clientes com fotos
- ✅ Newsletter com formulário
- ✅ Footer completo com links e redes sociais
- ✅ Menu mobile responsivo
- ✅ Animações e transições suaves

---

## Responsividade

O projeto é totalmente responsivo e foi testado em:

-  Mobile (320px - 767px)
-  Tablet (768px - 1023px)
-  Desktop (1024px+)
-  Large Desktop (1440px+)

---

##  Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## Autora

**Erika Laiane**

- GitHub: [@erikalaiane](https://github.com/erikalaiane)
- LinkedIn: [Erika Laiane](https://linkedin.com/in/erikalaiane)

---

## Contato

Tem alguma dúvida ou sugestão? Entre em contato!

- 📧 Email: erikalaianeazevedosantos@gmail.com
- 💼 LinkedIn: [Seu LinkedIn](https://www.linkedin.com/in/erika-laiane-azevedo)

---

## Agradecimentos

- Design inspirado nas melhores práticas de UI/UX
- Ícones e imagens do [Unsplash](https://unsplash.com)
- Comunidade React e Tailwind CSS

---

<div align="center">
  
  **Feito com 💜 e ☕ por [Erika Laiane](https://github.com/erikalaiane)**
  

</div>