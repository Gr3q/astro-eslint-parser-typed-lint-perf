import { m56 } from "./m56";
import { m55 } from "./m55";
import type { Item } from "../types";

export function m57(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m57: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m56(items),
    ...m55(items),
  ];
}
