import { m53 } from "./m53";
import { m52 } from "./m52";
import type { Item } from "../types";

export function m54(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m54: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m53(items),
    ...m52(items),
  ];
}
