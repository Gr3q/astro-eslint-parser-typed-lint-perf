import { m39 } from "./m39";
import { m38 } from "./m38";
import type { Item } from "../types";

export function m40(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m40: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m39(items),
    ...m38(items),
  ];
}
