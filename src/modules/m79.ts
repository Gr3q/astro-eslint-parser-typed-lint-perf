import { m78 } from "./m78";
import { m77 } from "./m77";
import type { Item } from "../types";

export function m79(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m79: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m78(items),
    ...m77(items),
  ];
}
