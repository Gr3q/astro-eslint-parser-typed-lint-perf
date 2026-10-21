import { m54 } from "./m54";
import { m53 } from "./m53";
import type { Item } from "../types";

export function m55(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m55: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m54(items),
    ...m53(items),
  ];
}
