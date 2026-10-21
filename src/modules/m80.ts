import { m79 } from "./m79";
import { m78 } from "./m78";
import type { Item } from "../types";

export function m80(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m80: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m79(items),
    ...m78(items),
  ];
}
