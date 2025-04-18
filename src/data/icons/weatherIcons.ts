
import { Icon } from "@/types/icon";

export const weatherIcons: Icon[] = [
  {
    id: "sun",
    name: "Sun",
    category: ["Weather"],
    tags: ["sunny", "weather", "clear", "day", "light"],
    svgPath: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  },
  {
    id: "cloud",
    name: "Cloud",
    category: ["Weather"],
    tags: ["storage", "weather", "sky", "computing"],
    svgPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  }
];
