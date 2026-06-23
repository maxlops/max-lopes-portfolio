# Maximo Lopes Portfolio

Portfolio público de Maximo Lopes para posicionamento em Product Operations, Operações Logísticas, Dados, Customer Success e IA aplicada à logística.

## Links

- Site em produção: https://max-lopes-portfolio.vercel.app
- Repositório GitHub: https://github.com/maxlops/max-lopes-portfolio

## Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Componentes locais no padrão shadcn/ui
- Framer Motion
- Lucide React

## Rodar localmente

```bash
npm install
npm run dev
```

Depois acesse o endereço exibido no terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Publique este projeto em um repositório GitHub.
2. Importe o repositório na Vercel ou rode `vercel deploy --prod`.
3. Use as configurações padrão de Vite:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Após o deploy, adicione a URL no LinkedIn em `Contato`, `Destaques` ou no campo de site do perfil.

## Onde editar conteúdo

- Dados pessoais, experiência, formação, ferramentas e estudos: `src/data/profile.ts`
- Projetos e estrutura futura de cases: `src/data/projects.ts`
- Currículo PDF: `public/files/max-lopes-curriculo-atual.pdf`
- Imagem do hero: `public/images/operations-dashboard-hero.png`

## Próximos incrementos recomendados

- Criar uma versão ATS separada do currículo e ativar o segundo botão em `src/components/ResumeSection.tsx`.
- Publicar os estudos de projeto como páginas individuais a partir dos slugs em `src/data/projects.ts`.
- Adicionar domínio próprio, se fizer sentido para divulgação profissional.
