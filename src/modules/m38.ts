import { m37 } from "./m37";
import { m36 } from "./m36";
import type { Item } from "../types";

export function m38(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m38: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m37(items),
    ...m36(items),
  ];
}
