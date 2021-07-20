import { drinkList } from "./drinkList";
import { foodList } from "./foodList";
import { meatList } from "./meatList";

const allFoodItems = [...foodList, ...meatList, ...drinkList];

export default allFoodItems;
