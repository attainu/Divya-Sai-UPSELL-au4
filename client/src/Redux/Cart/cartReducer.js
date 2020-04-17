import { ADD_TO_CART } from "./types";

const INITIAL_STATE = {
    cart: [],
    total:0
    
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  console.log(stateCopy, action.payload, action.type);
  
 switch (action.type) {
   case ADD_TO_CART:  
                      console.log("ADD TO CART", action.type, action.payload);
                      stateCopy.total+=action.payload.productprice * action.payload.quantity;
                      stateCopy.cart.push(action.payload);
                      return stateCopy;
                      
   default:
     return state;
 }

}