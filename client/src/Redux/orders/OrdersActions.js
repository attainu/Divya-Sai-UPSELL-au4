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
            _id: order._id,
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
export const setOrderStatus = (userId, orderId, token, value) => {
  return (dispatch) => {
    fetch(`${API}/order/${orderId}/status/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        orderId: orderId,
        status: value,
      }),
    })
      .then((res) => {
        res.json().then(() => {
          const payload = {
            _id: orderId,
            value,
          };
          dispatch({
            type: "SET_STATUS",
            payload: payload,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
export const fetchUserOrders = (userId, token) => {
  return (dispatch) => {
    fetch(`${API}/user/orders/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        res.json().then((orders) => {
          dispatch({
            type: "FETCH_USER_ORDERS",
            payload: orders,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
//http://localhost:5000/api/user/orders/5efeec383030223678c2b7fd
