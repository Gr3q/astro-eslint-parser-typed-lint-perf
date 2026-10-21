import { m6 } from "./m6";
import { m5 } from "./m5";
import type { Item } from "../types";

export function m7(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m7: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m6(items),
    ...m5(items),
  ];
}
