// Regenera lib/spiralData.ts a partir de public/vortix-mark.svg (logo oficial).
// Uso: npm run gen:spiral
import fs from "node:fs";

const SVG = "public/vortix-mark.svg";
const OUT = "lib/spiralData.ts";

const svg = fs.readFileSync(SVG, "utf8");
const vb = (svg.match(/viewBox="([^"]+)"/) || [])[1];
const paths = [...svg.matchAll(/<path d="([^"]+)"/g)].map((m) => m[1]);
const stops = [...svg.matchAll(/stop-color="([^"]+)"/g)].map((m) => m[1]);

if (!vb || paths.length === 0) {
  console.error("Não encontrei viewBox/paths em", SVG);
  process.exit(1);
}

let ts = "// AUTO-GENERATED from public/vortix-mark.svg (logo oficial vetorial da Vortix).\n";
ts += "// Fonte unica de verdade do desenho do vortex. Para atualizar a logo,\n";
ts += "// substitua public/vortix-mark.svg e rode: npm run gen:spiral\n\n";
ts += `export const VIEWBOX = ${JSON.stringify(vb)} as const;\n\n`;
ts += "// Cores nativas da logo (gradiente original). O componente permite override.\n";
ts += `export const LOGO_FROM = ${JSON.stringify(stops[0] || "#36C8A6")} as const;\n`;
ts += `export const LOGO_TO = ${JSON.stringify(stops[1] || "#2FC19D")} as const;\n\n`;
ts += "// Os dois bracos do vortex (paths vetoriais reais).\n";
ts += "export const ARMS: string[] = [\n";
for (const p of paths) ts += "  " + JSON.stringify(p) + ",\n";
ts += "];\n";

fs.writeFileSync(OUT, ts);
console.log(`OK — ${paths.length} paths, viewBox "${vb}" -> ${OUT}`);
