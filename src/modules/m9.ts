import { m8 } from "./m8";
import { m7 } from "./m7";
import type { Item } from "../types";

export function m9(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m9: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m8(items),
    ...m7(items),
  ];
}
