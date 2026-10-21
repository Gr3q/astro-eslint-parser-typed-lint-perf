import { m55 } from "./m55";
import { m54 } from "./m54";
import type { Item } from "../types";

export function m56(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m56: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m55(items),
    ...m54(items),
  ];
}
