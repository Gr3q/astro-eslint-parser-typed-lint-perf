import { m40 } from "./m40";
import { m39 } from "./m39";
import type { Item } from "../types";

export function m41(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m41: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m40(items),
    ...m39(items),
  ];
}
