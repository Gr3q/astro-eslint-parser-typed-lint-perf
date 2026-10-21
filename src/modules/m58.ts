import { m57 } from "./m57";
import { m56 } from "./m56";
import type { Item } from "../types";

export function m58(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m58: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m57(items),
    ...m56(items),
  ];
}
