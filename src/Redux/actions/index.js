export const FETCH_ALL_ITEMS = (payload)=>{
    return(
        {
            type:"FETCH_ALL_ITEMS"
        }
    )
};

export const FETCH_ONE_ITEM = (id)=>{
    return(
        {
            type:"FETCH_ONE_ITEM",
            payload:id
        }
    )
};

export const ADD_TO_CART = (id)=>{
    return(
        {
            type:"ADD_TO_CART",
            payload:id
        }
    )
};

export const DELETE_FROM_CART = (id)=>{
    return(
        {
            type:"DELETE_FROM_CART",
            payload:id
        }
    )
};

export const DELETE_ALL_FROM_CART = ()=>{
    return(
        {
            type:"DELETE_ALL_FROM_CART",
        }
    )
};
