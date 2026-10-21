import { m44 } from "./m44";
import { m43 } from "./m43";
import type { Item } from "../types";

export function m45(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m45: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m44(items),
    ...m43(items),
  ];
}
