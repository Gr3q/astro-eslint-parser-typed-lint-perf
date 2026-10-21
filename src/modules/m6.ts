import { m5 } from "./m5";
import { m4 } from "./m4";
import type { Item } from "../types";

export function m6(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m6: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m5(items),
    ...m4(items),
  ];
}
