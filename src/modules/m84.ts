import { m83 } from "./m83";
import { m82 } from "./m82";
import type { Item } from "../types";

export function m84(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m84: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m83(items),
    ...m82(items),
  ];
}
