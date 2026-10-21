import { m9 } from "./m9";
import { m8 } from "./m8";
import type { Item } from "../types";

export function m10(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m10: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m9(items),
    ...m8(items),
  ];
}
