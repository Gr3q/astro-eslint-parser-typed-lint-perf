import { m18 } from "./m18";
import { m17 } from "./m17";
import type { Item } from "../types";

export function m19(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m19: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m18(items),
    ...m17(items),
  ];
}
