import { m59 } from "./m59";
import { m58 } from "./m58";
import type { Item } from "../types";

export function m60(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m60: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m59(items),
    ...m58(items),
  ];
}
