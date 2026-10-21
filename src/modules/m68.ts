import { m67 } from "./m67";
import { m66 } from "./m66";
import type { Item } from "../types";

export function m68(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m68: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m67(items),
    ...m66(items),
  ];
}
