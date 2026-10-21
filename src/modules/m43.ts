import { m42 } from "./m42";
import { m41 } from "./m41";
import type { Item } from "../types";

export function m43(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m43: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m42(items),
    ...m41(items),
  ];
}
