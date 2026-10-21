import { m64 } from "./m64";
import { m63 } from "./m63";
import type { Item } from "../types";

export function m65(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m65: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m64(items),
    ...m63(items),
  ];
}
