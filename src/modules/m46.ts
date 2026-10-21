import { m45 } from "./m45";
import { m44 } from "./m44";
import type { Item } from "../types";

export function m46(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m46: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m45(items),
    ...m44(items),
  ];
}
