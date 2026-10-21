import { m62 } from "./m62";
import { m61 } from "./m61";
import type { Item } from "../types";

export function m63(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m63: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m62(items),
    ...m61(items),
  ];
}
