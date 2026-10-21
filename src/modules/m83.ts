import { m82 } from "./m82";
import { m81 } from "./m81";
import type { Item } from "../types";

export function m83(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m83: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m82(items),
    ...m81(items),
  ];
}
