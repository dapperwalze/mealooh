import {
    FETCH_ALL_ITEMS,
    FETCH_ONE_ITEM,
    ADD_TO_CART,
    DELETE_FROM_CART,
    DELETE_ALL_FROM_CART,
} from "../actions";

const initialState={
    current:null,
    allItems:[]
};

export default(state=initialState, {type, payload})=>{
    switch(type){
        case FETCH_ALL_ITEMS:
            console.log("seen 1");
            return 1;
        case FETCH_ONE_ITEM:
            console.log("seen 2");
            return 2;
        case ADD_TO_CART:
            console.log("seen 3");
            return 3;
        case DELETE_FROM_CART:
            console.log("seen 4");
            return 4;
        case DELETE_ALL_FROM_CART:
            console.log("seen 5");
            return 5;
        default:
            return 6

    }
}