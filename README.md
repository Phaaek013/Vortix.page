# Vortix

> Tecnologia que gira a seu favor.

Site institucional da **Vortix** — consultoria técnica em IA que estuda o
negócio do cliente antes de propor a solução (Business Intelligence + Banco de
Dados + Inteligência Artificial).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens da marca)
- **Framer Motion** (motion do vórtex + reveals)
- Deploy-ready para **Vercel**

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

| Rota       | Descrição                                              |
| ---------- | ------------------------------------------------------ |
| `/`        | Home (placeholder até a Fase 2 — Hero)                 |
| `/spiral`  | Página de teste isolada do espiral vetorial (Fase 1)   |

## O espiral (identidade)

O coração da marca é o **vórtex verde esmeralda** — a logo oficial em **SVG
vetorial de verdade** (dois `<path>` reais), não um raster. São 2 braços que
partem do centro e se enrolam para fora, cada um terminando numa ponta
arredondada em "onda". O espaço entre os braços é transparente, girando
lentamente de forma contínua e reagindo de forma sutil ao mouse e ao scroll.

- `public/vortix-mark.svg` — a logo oficial vetorial (fonte única de verdade)
- `lib/spiralData.ts` — paths extraídos do SVG para o componente React
- `scripts/gen-spiral.mjs` — regenera o data file a partir do SVG (`npm run gen:spiral`)
- `components/VortixMark.tsx` — o vetor puro (os dois braços + gradiente)
- `components/VortixSpiral.tsx` — o vetor vivo (rotação + mouse + scroll)

## Roadmap (fases)

1. ✅ Setup + design tokens + **espiral vetorial animado** (aprovação)
2. ⬜ Hero completo
3. ⬜ Diferencial (BI + Data + IA) + Serviços
4. ⬜ Processo + Cases
5. ⬜ Contato + footer + responsividade + polish
