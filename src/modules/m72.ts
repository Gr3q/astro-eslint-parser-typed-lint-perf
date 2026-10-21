import { m71 } from "./m71";
import { m70 } from "./m70";
import type { Item } from "../types";

export function m72(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m72: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m71(items),
    ...m70(items),
  ];
}
