import { m58 } from "./m58";
import { m57 } from "./m57";
import type { Item } from "../types";

export function m59(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m59: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m58(items),
    ...m57(items),
  ];
}
