import { FILTER_BY_CATEGORY, FILTER_BY_SEARCH,SET_SEARCH_TERM} from './types';

export const FILTER_BY_CATEGORY_METHOD = (category,price) =>{
     
     return { type: FILTER_BY_CATEGORY, payload:{category,price} }; 
} 

export const FILTER_BY_SEARCH_METHOD = (searchterm) =>{
     
     return { type: FILTER_BY_SEARCH, payload:searchterm }; 
} 

export const SET_SEARCH_TERM_METHOD = (searchterm) =>{
     return { type: SET_SEARCH_TERM, payload:searchterm }; 
}




