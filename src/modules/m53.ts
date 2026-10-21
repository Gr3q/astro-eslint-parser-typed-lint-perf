import { m52 } from "./m52";
import { m51 } from "./m51";
import type { Item } from "../types";

export function m53(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m53: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m52(items),
    ...m51(items),
  ];
}
