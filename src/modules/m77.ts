import { m76 } from "./m76";
import { m75 } from "./m75";
import type { Item } from "../types";

export function m77(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m77: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m76(items),
    ...m75(items),
  ];
}
