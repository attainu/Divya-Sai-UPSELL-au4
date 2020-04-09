import {combineReducers} from 'redux';

import {productReducer} from './Product/productReducer';
import {categoryReducer} from './Category/categoryReducer';

const rootReducer = combineReducers({
    productReducer,
    categoryReducer
  });
  
  export default rootReducer;