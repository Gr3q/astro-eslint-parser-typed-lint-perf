import { m4 } from "./m4";
import { m3 } from "./m3";
import type { Item } from "../types";

export function m5(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m5: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m4(items),
    ...m3(items),
  ];
}
