import { m21 } from "./m21";
import { m20 } from "./m20";
import type { Item } from "../types";

export function m22(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m22: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m21(items),
    ...m20(items),
  ];
}
