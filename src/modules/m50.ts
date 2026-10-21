import { m49 } from "./m49";
import { m48 } from "./m48";
import type { Item } from "../types";

export function m50(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m50: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m49(items),
    ...m48(items),
  ];
}
