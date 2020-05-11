import { FETCH_SET_ORDERS, UPDATE_ORDER } from "./types";
const INITIAL_STATE = {
  orders: [],
};

export const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SET_ORDERS:
      return { ...state, orders: action.payload };

    case UPDATE_ORDER:
      const updatedOrders = state.orders.filter(
        (order) => order.id !== action.payload.id
      );
      return { ...state, orders: [...updatedOrders, action.payload] };
    default:
      return state;
  }
};
