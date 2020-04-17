import {ADD_TO_CART} from './types';

export const AddtoCart = (cartitem)=>{
    console.log(cartitem);
    return { type: ADD_TO_CART , payload:cartitem };
        
    }
    
    
