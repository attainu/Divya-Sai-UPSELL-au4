import { combineReducers } from "redux";

import { productReducer, filterReducer } from "./Product/productReducer";
import { categoryReducer } from "./Category/categoryReducer";
import { cartReducer } from "./Cart/cartReducer";
import { ordersReducer } from "./orders/OrdersReducer";

const rootReducer = combineReducers({
  productReducer,
  filterReducer,
  categoryReducer,
  cartReducer,
  ordersReducer,
});

export default rootReducer;
