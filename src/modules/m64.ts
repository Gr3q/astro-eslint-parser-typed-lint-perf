import { m63 } from "./m63";
import { m62 } from "./m62";
import type { Item } from "../types";

export function m64(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m64: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m63(items),
    ...m62(items),
  ];
}
