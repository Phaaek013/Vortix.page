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

O coração da marca é o **vórtex verde esmeralda** — recriado como **SVG
vetorial de verdade** (paths matemáticos), não um raster. É um disco esmeralda
sólido com um canal de dupla espiral vazado (transparente), 2 braços com pontas
arredondadas em "onda", girando lentamente de forma contínua e reagindo de
forma sutil ao mouse e ao scroll.

- `lib/spiralData.ts` — paths gerados (fonte única de verdade)
- `scripts/gen-spiral.py` — gerador paramétrico do vetor (`npm run gen:spiral`)
- `components/VortixMark.tsx` — o vetor puro (disco + máscara de canal)
- `components/VortixSpiral.tsx` — o vetor vivo (rotação + mouse + scroll)

## Roadmap (fases)

1. ✅ Setup + design tokens + **espiral vetorial animado** (aprovação)
2. ⬜ Hero completo
3. ⬜ Diferencial (BI + Data + IA) + Serviços
4. ⬜ Processo + Cases
5. ⬜ Contato + footer + responsividade + polish
