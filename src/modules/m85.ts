import { m84 } from "./m84";
import { m83 } from "./m83";
import type { Item } from "../types";

export function m85(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m85: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m84(items),
    ...m83(items),
  ];
}
