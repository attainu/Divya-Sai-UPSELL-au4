import {ADD_TO_CART,ADD_TO_QUANTITY, SUBTRACT_FROM_QUANTITY, DELETE_FROM_CART} from './types';

export const AddtoCart = (cartitem)=>{
    return { type: ADD_TO_CART , payload:cartitem };  
    }
    
export const DELETE_FROM_CART_METHOD = (id)=>{
    return { type: DELETE_FROM_CART , payload:id };  
    }  

export const ADD_TO_QUANTITY_METHOD = (id)=>{
    return { type: ADD_TO_QUANTITY , payload:id };  
    } 

export const SUBTRACT_FROM_QUANTITY_METHOD = (id)=>{
    return { type: SUBTRACT_FROM_QUANTITY , payload:id };  
    } 