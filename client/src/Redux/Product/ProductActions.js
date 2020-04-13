import { FILTER_BY_CATEGORY, FILTER_BY_PRICE} from './types';

export const FILTER_BY_CATEGORY_METHOD = (category,price) =>{
     
     return { type: FILTER_BY_CATEGORY, payload:{category,price} }; 
} 

export const FILTER_BY_PRICE_METHOD = (price) => {
     return { type: FILTER_BY_PRICE, payload:price };
}
