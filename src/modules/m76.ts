import { m75 } from "./m75";
import { m74 } from "./m74";
import type { Item } from "../types";

export function m76(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m76: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m75(items),
    ...m74(items),
  ];
}
