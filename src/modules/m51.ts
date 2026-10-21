import { m50 } from "./m50";
import { m49 } from "./m49";
import type { Item } from "../types";

export function m51(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m51: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m50(items),
    ...m49(items),
  ];
}
