
import { Icon } from "@/types/icon";
import { categories } from "./categories";
import { uiIcons } from "./icons/uiIcons";
import { businessIcons } from "./icons/businessIcons";
import { technologyIcons } from "./icons/technologyIcons";
import { socialMediaIcons } from "./icons/socialMediaIcons";
import { weatherIcons } from "./icons/weatherIcons";
import { transportationIcons } from "./icons/transportationIcons";
import { foodAndDrinksIcons } from "./icons/foodAndDrinksIcons";
import { sportsAndHealthIcons } from "./icons/sportsAndHealthIcons";

export const iconData: Icon[] = [
  ...uiIcons,
  ...businessIcons,
  ...technologyIcons,
  ...socialMediaIcons,
  ...weatherIcons,
  ...transportationIcons,
  ...foodAndDrinksIcons,
  ...sportsAndHealthIcons
];

export { categories } from "./categories";
export type { Icon } from "@/types/icon";
