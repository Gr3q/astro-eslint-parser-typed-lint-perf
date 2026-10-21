import { m29 } from "./m29";
import { m28 } from "./m28";
import type { Item } from "../types";

export function m30(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m30: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m29(items),
    ...m28(items),
  ];
}
