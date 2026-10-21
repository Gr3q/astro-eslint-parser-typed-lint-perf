import { m25 } from "./m25";
import { m24 } from "./m24";
import type { Item } from "../types";

export function m26(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m26: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m25(items),
    ...m24(items),
  ];
}
