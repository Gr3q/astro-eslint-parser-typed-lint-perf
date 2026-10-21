import { m36 } from "./m36";
import { m35 } from "./m35";
import type { Item } from "../types";

export function m37(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m37: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m36(items),
    ...m35(items),
  ];
}
