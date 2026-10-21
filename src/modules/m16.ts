import { m15 } from "./m15";
import { m14 } from "./m14";
import type { Item } from "../types";

export function m16(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m16: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m15(items),
    ...m14(items),
  ];
}
