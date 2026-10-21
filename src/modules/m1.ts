import { m0 } from "./m0";
import type { Item } from "../types";

export function m1(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m1: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m0(items),
  ];
}
