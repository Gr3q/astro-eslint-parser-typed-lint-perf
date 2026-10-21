import { m68 } from "./m68";
import { m67 } from "./m67";
import type { Item } from "../types";

export function m69(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m69: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m68(items),
    ...m67(items),
  ];
}
