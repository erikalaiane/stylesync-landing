# StyleSync Landing Page

> Plataforma de styling pessoal impulsionada por IA com vibe urbana e moderna

![StyleSync](https://img.shields.io/badge/StyleSync-Fashion%20Tech-E63946?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

## Sobre o Projeto

StyleSync é uma landing page moderna para uma startup de moda que utiliza inteligência artificial para criar looks personalizados. O design combina elementos de street art e graffiti com uma paleta de cores vibrante em tons de vinho, rosa e amarelo.

### Destaques

-  **Design Urbano**: Inspirado em graffiti e street art
-  **Paleta Vibrante**: Tons de vinho (#8B1538), pink (#FF006E) e amarelo (#FFB703)
-  **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
-  **Performance**: Construído com Vite para carregamento ultrarrápido
-  **Animações**: Efeitos hover e transformações suaves

## Tecnologias

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones moderna
- **Unsplash** - Imagens de alta qualidade

##  Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório
```bash
git clone https://github.com/erikalaiane/stylesync-landing.git
cd stylesync-landing
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

## Estrutura do Projeto

```
stylesync-landing/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Seção hero principal
│   │   ├── HowItWorks.jsx     # Como funciona (3 passos)
│   │   ├── Expertise.jsx      # Grid de estilos/categorias
│   │   ├── Featured.jsx       # Banner promocional grande
│   │   ├── WhyStyleSync.jsx   # Benefícios do produto
│   │   ├── Team.jsx           # Seção da equipe
│   │   ├── Pricing.jsx        # Planos e preços
│   │   ├── Testimonials.jsx   # Depoimentos de clientes
│   │   ├── Newsletter.jsx     # Captura de email
│   │   └── Footer.jsx         # Rodapé com links
│   ├── App.jsx                # Componente principal
│   ├── main.jsx              # Entry point
│   └── index.css             # Estilos globais
├── public/                    # Assets estáticos
├── index.html                # HTML principal
├── tailwind.config.js        # Configuração do Tailwind
├── vite.config.js           # Configuração do Vite
└── package.json             # Dependências do projeto
```

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Vinho Principal | `#8B1538` | Elementos principais, gradientes |
| Vinho Claro | `#B8395E` | Hover states, destaques |
| Graffiti Red | `#E63946` | Acentos vibrantes |
| Neon Pink | `#FF006E` | CTAs importantes |
| Street Yellow | `#FFB703` | Badges, alertas |
| Grafite | `#2B2D42` | Texto escuro, backgrounds |
| Cinza Urbano | `#8D99AE` | Texto secundário |

## Seções da Landing Page

1. **Hero** - Apresentação principal com CTA
2. **How It Works** - 3 passos do processo
3. **Expertise** - 4 categorias de estilo (Streetwear, Casual, Business, Evening)
4. **Featured** - Banner promocional com nova coleção
5. **Why StyleSync** - 4 benefícios principais
6. **Team** - Equipe de 4 membros
7. **Pricing** - 3 planos (Básico, Pro, Premium)
8. **Testimonials** - 3 depoimentos com avaliações
9. **Newsletter** - Captura de email
10. **Footer** - Links úteis e redes sociais

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

## Customização

### Alterar Cores

Edite o arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#B91C1C',        // Sua cor primária
      'primary-dark': '#7F1D1D', // Variação escura
      secondary: '#1F2937',      // Cor secundária
      accent: '#F59E0B',         // Cor de destaque
      pop: '#10B981',            // Cor vibrante
    },
  },
}
```

### Alterar Imagens

Substitua as URLs do Unsplash nos componentes por suas próprias imagens:

```jsx
// Exemplo no Hero.jsx
<img 
  src="SUA_IMAGEM_AQUI.jpg" 
  alt="Fashion" 
/>
```

### Adicionar Novas Seções

1. Crie um novo componente em `src/components/`
2. Importe no `App.jsx`
3. Adicione na estrutura do componente App

## Responsividade

O projeto utiliza breakpoints do Tailwind CSS:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Faça upload da pasta dist/
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Melhorias Futuras

- [ ] Adicionar animações com Framer Motion
- [ ] Implementar dark mode
- [ ] Integrar com backend para newsletter
- [ ] Adicionar mais idiomas (i18n)
- [ ] Criar seção de FAQ
- [ ] Adicionar blog
- [ ] Implementar chat ao vivo
- [ ] Otimizar imagens com next/image ou similar
- [ ] Adicionar testes unitários
- [ ] Implementar Analytics


## 👩‍💻 Autora

**Erika Laiane**

- GitHub: [@erikalaiane](https://github.com/erikalaiane)

## Agradecimentos

- Design inspirado em cultura urbana e street art
- Ícones por [Lucide Icons](https://lucide.dev)

---

<div align="center">

**Feito com ❤️ e muito ☕ por Erika Laiane**


</div>