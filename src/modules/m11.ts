import { m10 } from "./m10";
import { m9 } from "./m9";
import type { Item } from "../types";

export function m11(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m11: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m10(items),
    ...m9(items),
  ];
}
