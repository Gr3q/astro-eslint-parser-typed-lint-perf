import { m81 } from "./m81";
import { m80 } from "./m80";
import type { Item } from "../types";

export function m82(items: Item[]): string[] {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return [
    `m82: ${String(total)}`,
    ...items.map((item) => item.label.toUpperCase()),
    ...m81(items),
    ...m80(items),
  ];
}
