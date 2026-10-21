import { m74 } from "./m74";
import { m73 } from "./m73";
import type { Item } from "../types";

export function m75(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m75: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m74(items),
    ...m73(items),
  ];
}
