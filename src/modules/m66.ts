import { m65 } from "./m65";
import { m64 } from "./m64";
import type { Item } from "../types";

export function m66(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m66: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m65(items),
    ...m64(items),
  ];
}
