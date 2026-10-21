# astro-eslint-parser typed linting perf repro

Linting `.astro` files with type-checked rules costs a roughly constant amount
of time per file, while `.ts` files of the same shape share one TypeScript
program and stay nearly flat.

```sh
pnpm install
pnpm lint:astro   # 88 .astro components
pnpm lint:ts      # 88 equivalent .ts modules

node scripts/generate.mjs 400   # regenerate with more files
```

Wall-clock times on an Apple Silicon Mac:

| Files | `lint:astro` | `lint:ts` |
| ----: | -----------: | --------: |
|    88 |        3.1 s |     1.1 s |
|   200 |        5.8 s |     1.3 s |
|   400 |       11.9 s |     1.7 s |

Each component imports the two previous ones and a shared type. Versions are
pinned in `package.json`.
