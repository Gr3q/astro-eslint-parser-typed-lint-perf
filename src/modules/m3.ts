import { m2 } from "./m2";
import { m1 } from "./m1";
import type { Item } from "../types";

export function m3(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m3: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m2(items),
    ...m1(items),
  ];
}
