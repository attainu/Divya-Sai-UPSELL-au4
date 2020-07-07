import { FETCH_SET_ORDERS, UPDATE_ORDER } from "./types";
const INITIAL_STATE = {
  userOrders: [],
  orders: [],
};

export const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SET_ORDERS:
      return { ...state, orders: action.payload };
    case "FETCH_USER_ORDERS":
      return { ...state, userOrders: action.payload };

    case UPDATE_ORDER:
      const updatedOrders = state.orders.filter(
        (order) => order.id !== action.payload.id
      );

    case "SET_STATUS":
      const targetOrders = state.orders.map((order) => {
        if (order._id === action.payload._id) {
          order.status = action.payload.value;
        }
        return order;
      });
      return { ...state, orders: [...targetOrders] };
    default:
      return state;
  }
};
