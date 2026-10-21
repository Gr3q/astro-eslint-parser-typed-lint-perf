// Generates N `.astro` components that import each other, plus N `.ts` modules
// of the same shape for comparison. Usage: node scripts/generate.mjs [count]
import { mkdirSync, rmSync, writeFileSync } from "node:fs";

const count = Number(process.argv[2] ?? 88);

for (const dir of ["src/components", "src/modules"]) {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
}

const deps = (i) => [i - 1, i - 2].filter((d) => d >= 0);

for (let i = 0; i < count; i++) {
  writeFileSync(
    `src/components/C${i}.astro`,
    `---
${deps(i).map((d) => `import C${d} from "./C${d}.astro";`).join("\n")}
import type { Item } from "../types";

interface Props {
  items: Item[];
}

const { items } = Astro.props;
const total = items.reduce((sum, item) => sum + item.value, 0);
const labels = items.map((item) => item.label.toUpperCase());
---

<section>
  <h2>C${i}: {total}</h2>
  <p>{labels.join(", ")}</p>
${deps(i).map((d) => `  <C${d} items={items} />`).join("\n")}
</section>
`,
  );

  writeFileSync(
    `src/modules/m${i}.ts`,
    `${deps(i).map((d) => `import { m${d} } from "./m${d}";`).join("\n")}
import type { Item } from "../types";

export function m${i}(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    \`m${i}: \${String(total)}\`,
    ...items.map((item) => item.label.toUpperCase()),
${deps(i).map((d) => `    ...m${d}(items),`).join("\n")}
  ];
}
`,
  );
}
