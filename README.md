# Portfólio · Geraldo Júnior

Site pessoal com projetos, skills e trajetória: **https://geraldo.is-a.dev/**

![Preview do portfólio](public/og-image.png)

## Stack

- React 19 (Create React App)
- CSS puro com variáveis e efeito glassmorphism
- Deploy no GitHub Pages com domínio `is-a.dev`

## Rodando localmente

```bash
npm install
npm start        # http://localhost:3000
npm test         # testes
npm run build    # build de produção (sem source maps, via .env)
npm run deploy   # publica a pasta build na branch gh-pages
```

## Estrutura

```
src/
  components/   Header, Hero, About, Experience, Skills, Projects, Contact, Footer
  assets/img/   foto e screenshots dos projetos
public/
  index.html    meta tags, Open Graph e fonte Poppins
  og-image.png  imagem de preview do link
```
