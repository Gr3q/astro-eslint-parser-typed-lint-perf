import { m77 } from "./m77";
import { m76 } from "./m76";
import type { Item } from "../types";

export function m78(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m78: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m77(items),
    ...m76(items),
  ];
}
