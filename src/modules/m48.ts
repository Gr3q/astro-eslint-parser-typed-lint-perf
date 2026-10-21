import { m47 } from "./m47";
import { m46 } from "./m46";
import type { Item } from "../types";

export function m48(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m48: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m47(items),
    ...m46(items),
  ];
}
