import { m12 } from "./m12";
import { m11 } from "./m11";
import type { Item } from "../types";

export function m13(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m13: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m12(items),
    ...m11(items),
  ];
}
