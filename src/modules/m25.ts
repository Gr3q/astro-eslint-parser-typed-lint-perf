import { m24 } from "./m24";
import { m23 } from "./m23";
import type { Item } from "../types";

export function m25(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m25: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m24(items),
    ...m23(items),
  ];
}
