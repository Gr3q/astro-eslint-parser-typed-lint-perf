import { m80 } from "./m80";
import { m79 } from "./m79";
import type { Item } from "../types";

export function m81(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m81: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m80(items),
    ...m79(items),
  ];
}
