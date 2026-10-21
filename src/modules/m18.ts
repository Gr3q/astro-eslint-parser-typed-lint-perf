import { m17 } from "./m17";
import { m16 } from "./m16";
import type { Item } from "../types";

export function m18(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m18: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m17(items),
    ...m16(items),
  ];
}
