import { m28 } from "./m28";
import { m27 } from "./m27";
import type { Item } from "../types";

export function m29(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m29: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m28(items),
    ...m27(items),
  ];
}
