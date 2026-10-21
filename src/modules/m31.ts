import { m30 } from "./m30";
import { m29 } from "./m29";
import type { Item } from "../types";

export function m31(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m31: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m30(items),
    ...m29(items),
  ];
}
