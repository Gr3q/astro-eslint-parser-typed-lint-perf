import { m32 } from "./m32";
import { m31 } from "./m31";
import type { Item } from "../types";

export function m33(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m33: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m32(items),
    ...m31(items),
  ];
}
