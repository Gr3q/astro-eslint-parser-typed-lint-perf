import { m33 } from "./m33";
import { m32 } from "./m32";
import type { Item } from "../types";

export function m34(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m34: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m33(items),
    ...m32(items),
  ];
}
