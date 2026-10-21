import { m7 } from "./m7";
import { m6 } from "./m6";
import type { Item } from "../types";

export function m8(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m8: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m7(items),
    ...m6(items),
  ];
}
