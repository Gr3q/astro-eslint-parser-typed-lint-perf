import { m26 } from "./m26";
import { m25 } from "./m25";
import type { Item } from "../types";

export function m27(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m27: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m26(items),
    ...m25(items),
  ];
}
