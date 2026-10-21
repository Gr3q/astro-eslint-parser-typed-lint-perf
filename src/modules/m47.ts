import { m46 } from "./m46";
import { m45 } from "./m45";
import type { Item } from "../types";

export function m47(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m47: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m46(items),
    ...m45(items),
  ];
}
