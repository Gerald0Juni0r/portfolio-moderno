# Portfólio · Geraldo Júnior

Site pessoal com hero, sobre, trajetória, skills e projetos: **https://geraldo.is-a.dev/**

![Preview do portfólio](public/og-image.png)

## Stack

- React 19 (Create React App)
- CSS puro com variáveis, tema escuro e layout responsivo (bento + timeline)
- Fontes: Sora, DM Sans e JetBrains Mono
- Deploy automático no GitHub Pages via GitHub Actions, domínio `is-a.dev`

## Rodando localmente

```bash
npm install
npm start        # http://localhost:3000
npm run build    # build de produção (sem source maps, via .env)
```

## Estrutura

```
src/
  components/   Header, Hero, About, Experience, Skills, Projects, Contact, Footer, ScrollToTopButton, Icons
  assets/img/   foto, logo e thumbs dos projetos
  index.css     design system + estilos
public/
  index.html    meta tags, Open Graph e fontes
  og-image.png  imagem de preview do link
```
