import { combineReducers } from "redux";

import { productReducer } from "./Product/productReducer";
import { categoryReducer } from "./Category/categoryReducer";
import { cartReducer } from "./Cart/cartReducer";
import { ordersReducer } from "./orders/OrdersReducer";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer,
  ordersReducer,
});

export default rootReducer;
