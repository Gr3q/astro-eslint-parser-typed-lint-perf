import { m20 } from "./m20";
import { m19 } from "./m19";
import type { Item } from "../types";

export function m21(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m21: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m20(items),
    ...m19(items),
  ];
}
