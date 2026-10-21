import { m11 } from "./m11";
import { m10 } from "./m10";
import type { Item } from "../types";

export function m12(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m12: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m11(items),
    ...m10(items),
  ];
}
