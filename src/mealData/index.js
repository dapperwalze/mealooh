import {drinkList} from "./drinkList";
import {foodList} from "./foodList";
import {meatList} from "./meatList";


const allFoodItems=[...drinkList, ...foodList, ...meatList];


export default allFoodItems;
