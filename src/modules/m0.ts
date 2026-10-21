
import type { Item } from "../types";

export function m0(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m0: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),

  ];
}
