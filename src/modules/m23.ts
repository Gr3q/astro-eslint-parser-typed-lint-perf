import { m22 } from "./m22";
import { m21 } from "./m21";
import type { Item } from "../types";

export function m23(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m23: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m22(items),
    ...m21(items),
  ];
}
