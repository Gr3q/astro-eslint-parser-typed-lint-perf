import { m19 } from "./m19";
import { m18 } from "./m18";
import type { Item } from "../types";

export function m20(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m20: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m19(items),
    ...m18(items),
  ];
}
