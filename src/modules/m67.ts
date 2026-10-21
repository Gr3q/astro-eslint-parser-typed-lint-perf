import { m66 } from "./m66";
import { m65 } from "./m65";
import type { Item } from "../types";

export function m67(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m67: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m66(items),
    ...m65(items),
  ];
}
