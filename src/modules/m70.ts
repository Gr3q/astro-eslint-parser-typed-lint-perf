import { m69 } from "./m69";
import { m68 } from "./m68";
import type { Item } from "../types";

export function m70(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m70: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m69(items),
    ...m68(items),
  ];
}
