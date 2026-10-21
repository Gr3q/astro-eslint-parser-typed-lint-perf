import { m1 } from "./m1";
import { m0 } from "./m0";
import type { Item } from "../types";

export function m2(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m2: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m1(items),
    ...m0(items),
  ];
}
