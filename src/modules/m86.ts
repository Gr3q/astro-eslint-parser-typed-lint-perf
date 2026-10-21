import { m85 } from "./m85";
import { m84 } from "./m84";
import type { Item } from "../types";

export function m86(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m86: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m85(items),
    ...m84(items),
  ];
}
