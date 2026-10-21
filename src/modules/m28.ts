import { m27 } from "./m27";
import { m26 } from "./m26";
import type { Item } from "../types";

export function m28(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m28: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m27(items),
    ...m26(items),
  ];
}
