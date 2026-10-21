import { m23 } from "./m23";
import { m22 } from "./m22";
import type { Item } from "../types";

export function m24(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m24: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m23(items),
    ...m22(items),
  ];
}
