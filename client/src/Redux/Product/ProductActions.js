import { FILTER_BY_CATEGORY} from './types';

export const FILTER_BY_CATEGORY_METHOD = (category,price) =>{
     
     return { type: FILTER_BY_CATEGORY, payload:{category,price} }; 
} 




