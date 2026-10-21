import { m48 } from "./m48";
import { m47 } from "./m47";
import type { Item } from "../types";

export function m49(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m49: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m48(items),
    ...m47(items),
  ];
}
