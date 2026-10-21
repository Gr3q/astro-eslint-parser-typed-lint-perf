import { m73 } from "./m73";
import { m72 } from "./m72";
import type { Item } from "../types";

export function m74(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m74: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m73(items),
    ...m72(items),
  ];
}
