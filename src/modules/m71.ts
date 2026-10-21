import { m70 } from "./m70";
import { m69 } from "./m69";
import type { Item } from "../types";

export function m71(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m71: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m70(items),
    ...m69(items),
  ];
}
