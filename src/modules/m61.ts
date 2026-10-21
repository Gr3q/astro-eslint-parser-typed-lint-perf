import { m60 } from "./m60";
import { m59 } from "./m59";
import type { Item } from "../types";

export function m61(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m61: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m60(items),
    ...m59(items),
  ];
}
