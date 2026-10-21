import { m16 } from "./m16";
import { m15 } from "./m15";
import type { Item } from "../types";

export function m17(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m17: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m16(items),
    ...m15(items),
  ];
}
