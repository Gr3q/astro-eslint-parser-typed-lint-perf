import { m34 } from "./m34";
import { m33 } from "./m33";
import type { Item } from "../types";

export function m35(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m35: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m34(items),
    ...m33(items),
  ];
}
