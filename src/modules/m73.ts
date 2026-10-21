import { m72 } from "./m72";
import { m71 } from "./m71";
import type { Item } from "../types";

export function m73(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m73: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m72(items),
    ...m71(items),
  ];
}
