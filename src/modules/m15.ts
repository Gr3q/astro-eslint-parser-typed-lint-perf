import { m14 } from "./m14";
import { m13 } from "./m13";
import type { Item } from "../types";

export function m15(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m15: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m14(items),
    ...m13(items),
  ];
}
