import { m35 } from "./m35";
import { m34 } from "./m34";
import type { Item } from "../types";

export function m36(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m36: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m35(items),
    ...m34(items),
  ];
}
