import { m86 } from "./m86";
import { m85 } from "./m85";
import type { Item } from "../types";

export function m87(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m87: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m86(items),
    ...m85(items),
  ];
}
