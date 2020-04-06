import {combineReducers} from 'redux';

import {productReducer} from './Product/productReducer';

const rootReducer = combineReducers({
    productReducer
  });
  
  export default rootReducer;