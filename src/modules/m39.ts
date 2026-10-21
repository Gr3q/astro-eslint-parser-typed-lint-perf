import { m38 } from "./m38";
import { m37 } from "./m37";
import type { Item } from "../types";

export function m39(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m39: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m38(items),
    ...m37(items),
  ];
}
