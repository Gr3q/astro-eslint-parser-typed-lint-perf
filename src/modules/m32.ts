import { m31 } from "./m31";
import { m30 } from "./m30";
import type { Item } from "../types";

export function m32(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m32: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m31(items),
    ...m30(items),
  ];
}
