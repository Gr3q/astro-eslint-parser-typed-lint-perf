import { m41 } from "./m41";
import { m40 } from "./m40";
import type { Item } from "../types";

export function m42(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m42: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m41(items),
    ...m40(items),
  ];
}
