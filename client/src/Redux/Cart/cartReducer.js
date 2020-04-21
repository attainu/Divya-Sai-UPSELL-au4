import { ADD_TO_CART, ADD_TO_QUANTITY, SUBTRACT_FROM_QUANTITY, DELETE_FROM_CART } from "./types";

const INITIAL_STATE = {
    cart: [],
    total:0
    
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  
  let itemid;
  
 switch (action.type) {
   case ADD_TO_CART:  
                      console.log("ADD TO CART", action.type, action.payload);
            
                      const existingitem = stateCopy.cart.find((cartitem)=>cartitem.productid==action.payload.productid);
                      itemid = stateCopy.cart.indexOf(existingitem);
                      console.log(existingitem);
                      if(existingitem && 
                        ((action.payload.deliverydate===stateCopy.cart[itemid].deliverydate) &&
                        (action.payload.selHour===stateCopy.cart[itemid].selHour) &&
                        (action.payload.selMin===stateCopy.cart[itemid].selMin) && 
                        (action.payload.AMPM===stateCopy.cart[itemid].AMPM))){
                        stateCopy.total+= action.payload.quantity * stateCopy.cart[itemid].productprice;
                        stateCopy.cart[itemid].quantity = Number(stateCopy.cart[itemid].quantity)+Number(action.payload.quantity);
                      }
                      else{
                        stateCopy.total+=action.payload.productprice * action.payload.quantity;
                        stateCopy.cart.push(action.payload);
                      }
                      return stateCopy;
                     

case DELETE_FROM_CART:  
                      console.log("DELETE FROM CART", action.type, action.payload);
                      itemid = action.payload; 
                      stateCopy.total-= stateCopy.cart[itemid].quantity * stateCopy.cart[itemid].productprice;
                      stateCopy.cart.splice(itemid,1);
                      return {...state, cart:stateCopy.cart, total:stateCopy.total}

case ADD_TO_QUANTITY:
                      console.log("ADD TO QUANTITY", action.type, action.payload);
                      itemid = action.payload;
                      stateCopy.total+=stateCopy.cart[itemid].productprice;
                      stateCopy.cart[itemid].quantity = Number(stateCopy.cart[itemid].quantity)+1;
                      return stateCopy;

case SUBTRACT_FROM_QUANTITY:
                    console.log("SUBTRACT FROM QUANTITY", action.type, action.payload);
                    itemid = action.payload;
                    if(stateCopy.cart[itemid].quantity>=2){
                    stateCopy.total-=stateCopy.cart[itemid].productprice;
                    stateCopy.cart[itemid].quantity = Number(stateCopy.cart[itemid].quantity)-1;
                    }

                    return stateCopy;          
   default:
     return state;
 }

}