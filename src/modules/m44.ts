import { m43 } from "./m43";
import { m42 } from "./m42";
import type { Item } from "../types";

export function m44(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m44: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m43(items),
    ...m42(items),
  ];
}
