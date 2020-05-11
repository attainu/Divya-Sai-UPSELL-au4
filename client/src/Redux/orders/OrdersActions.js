import { FETCH_SET_ORDERS, UPDATE_ORDER } from "./types";
import { API } from "../../backend";
export const fetchOrders = (userId, token) => {
  return (dispatch) => {
    fetch(`${API}/order/all/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          const payload = data.map((order) => ({
            id: order.transaction_id,
            products: order.products,
            price: order.amount,
            status: order.status,
          }));
          dispatch({
            type: FETCH_SET_ORDERS,
            payload: payload,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
