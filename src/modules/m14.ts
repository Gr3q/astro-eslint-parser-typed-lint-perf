import { m13 } from "./m13";
import { m12 } from "./m12";
import type { Item } from "../types";

export function m14(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m14: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m13(items),
    ...m12(items),
  ];
}
