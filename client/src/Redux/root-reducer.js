import {combineReducers} from 'redux';

import {productReducer} from './Product/productReducer';
import {categoryReducer} from './Category/categoryReducer';
import {cartReducer} from './Cart/cartReducer';

const rootReducer = combineReducers({
    productReducer,
    categoryReducer,
    cartReducer
    
  });
  
  export default rootReducer;