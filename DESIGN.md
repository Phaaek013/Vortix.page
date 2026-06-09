# Design

## Theme

Dark, premium, technical. Fundo near-black com profundidade por camadas tonais — não preto chapado. Atmosfera: como olhar para uma tela de monitoramento sofisticada à noite. Verde esmeralda como único acento de cor, usado cirurgicamente. Textura de grain sutil e glow radial atrás de elementos-chave adicionam profundidade sem ruído.

## Colors

| Token | Value | Usage |
|---|---|---|
| `ink-900` | `#0A0A0A` | Background base |
| `ink-800` | `#0E0E0E` | — |
| `ink-700` | `#131313` | Surface / card background |
| `ink-600` | `#1A1A1A` | Elevated surface |
| `ink-500` | `#201F1F` | Hover surface |
| `emerald` | `#3DD9A0` | Primary accent, CTA, keyword highlight |
| `emerald-bright` | `#61F6BB` | Hover state of emerald CTA |
| `emerald-dim` | `#2BB98A` | Muted emerald, gradient end |
| `emerald-deep` | `#006C4B` | Deep shadow / subtle background |
| `cream` | `#F5F4F0` | Primary text on dark, contrast sections background |
| `mist` | `#BBCAC0` | Secondary text, body copy |
| `slate` | `#94A3B8` | Tertiary text, labels, captions |

Glow utility `.aura`: `radial-gradient(circle, rgba(61,217,160,0.16) 0%, rgba(10,10,10,0) 68%)`.
Grain utility `.grain::after`: SVG fractalNoise, opacity 0.04.

## Typography

| Role | Font | Weights | Notes |
|---|---|---|---|
| Display | Space Grotesk | 400 500 600 700 | Headlines, titles — geométrica com personalidade |
| Body | DM Sans | 400 500 600 700 | Copy, labels, UI text — legível em qualquer tamanho |

CSS variables: `--font-display`, `--font-body`.

**Tracking**: headlines grandes usam `tracking-tightest` (-0.045em). Labels e eyebrows usam tracking positivo largo (0.14–0.18em uppercase).

**Scale (approximate)**:
- Display hero: clamp(48px, 6.5vw, 80px)
- H2 section: 36–48px
- H3 card: 20–24px
- Body: 16–17px, line-height 1.65–1.7
- Small / label: 12–13px

## Components

### Button — Primary
```
bg-emerald text-ink-900 rounded-full px-7 py-3.5
font-body text-sm font-semibold
hover:bg-emerald-bright transition-colors
```
Arrow `→` inline, `group-hover:translate-x-0.5`.

### Button — Ghost
```
border border-white/[0.08] text-mist rounded-full px-7 py-3.5
font-body text-sm
hover:border-white/20 hover:text-cream
```

### Nav
Fixed top, transparent → `bg-ink-900/80 backdrop-blur-md border-b border-white/5` on scroll.
Logo: VortixMark 28px + "Vortix" Space Grotesk 15px semibold.

### VortixSpiral (logo animada)
- Rotação contínua `spin={44}` (segundos/volta)
- Mouse tilt via Framer Motion spring (stiffness 120, damping 18)
- Scroll rotation: `scroll={14–18}`
- Glow radial behind: `.aura` com `inset: -22%`
- Respeita `prefers-reduced-motion`

### Card — Service
```
bg-ink-700 border border-white/[0.06] rounded-2xl p-6–8
hover: border-emerald/20 bg-ink-600 (transition-all 300ms)
```
Ícone: lucide-react ou SVG próprio, cor `text-emerald`.
Título: Space Grotesk 20px semibold, text-cream.
Descrição: DM Sans 15px, text-mist.

### Card — Process Step
Numeração grande `font-display text-5xl font-bold text-emerald/10` como fundo decorativo.
Linha conectora entre steps em telas largas.

### Section Eyebrow
```
font-body text-[13px] uppercase tracking-[0.18em] text-emerald/70
```
Sem badge/pílula. Texto puro.

## Layout

**Container**: `max-w-container` (1280px), `px-6 lg:px-12`.

**Grid base**: assimétrico. Evitar 4 cards idênticos em linha. Preferir:
- Hero: `grid-cols-[1fr_auto]` — texto + espiral como coluna
- Serviços: bento grid ou masonry com cards de tamanhos variados
- Processo: linha horizontal com números grandes
- Cases: grid 3 colunas com card destaque maior

**Spacing**: seções usam `py-24 lg:py-32`. Gaps internos 6–8 (24–32px).

**Motion**:
- Page load: `initial: {opacity:0, y:22}` → `animate: {opacity:1, y:0}` com `ease:[0.16,1,0.3,1]`
- Stagger por delay incremental (0.05s por elemento)
- Scroll reveals: Framer Motion `whileInView` com `once: true`, `viewport: {margin: "-80px"}`
- Hover: `scale(1.02)` nos cards, translateX no arrow dos botões

**Atmosfera por seção**:
- Hero: glow ellipse top-right, grain, espiral animado
- Diferencial: fundo `ink-700` com borda sutil, ícones grandes
- Serviços: ink-900, cards ink-700 em bento
- Processo: linha conectora com step indicator emerald
- Cases: cream background para contraste de seção
- Contato: ink-800, formulário centralizado
