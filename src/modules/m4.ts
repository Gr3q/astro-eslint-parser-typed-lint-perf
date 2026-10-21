import { m3 } from "./m3";
import { m2 } from "./m2";
import type { Item } from "../types";

export function m4(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m4: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m3(items),
    ...m2(items),
  ];
}
