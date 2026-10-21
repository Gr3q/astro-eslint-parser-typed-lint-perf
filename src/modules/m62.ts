import { m61 } from "./m61";
import { m60 } from "./m60";
import type { Item } from "../types";

export function m62(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m62: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m61(items),
    ...m60(items),
  ];
}
