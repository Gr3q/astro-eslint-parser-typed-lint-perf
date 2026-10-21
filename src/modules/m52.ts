import { m51 } from "./m51";
import { m50 } from "./m50";
import type { Item } from "../types";

export function m52(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m52: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m51(items),
    ...m50(items),
  ];
}
