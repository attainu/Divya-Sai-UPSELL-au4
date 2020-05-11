import {
  FILTER_BY_CATEGORY,
  FILTER_BY_SEARCH,
  SET_SEARCH_TERM,
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./types";
import { API } from "../../backend";
export const FILTER_BY_CATEGORY_METHOD = (category, price) => {
  return (dispatch) => {
    dispatch({ type: FILTER_BY_CATEGORY, payload: { category, price } });
  };
};

export const FILTER_BY_SEARCH_METHOD = (searchterm) => {
  return (dispatch) => {
    dispatch({ type: FILTER_BY_SEARCH, payload: searchterm });
  };
};

export const SET_SEARCH_TERM_METHOD = (searchterm) => {
  return (dispatch) => {
    dispatch({ type: SET_SEARCH_TERM, payload: searchterm });
  };
};

//Product Calls

export const getAllProducts = () => {
  return (dispatch) => {
    fetch(`${API}/products`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          const payload = data.map((product) => ({
            product_id: product._id,
            product_title: product.name,
            product_price: product.price,
            category_name: product.category,
            product_description: product.description,
          }));
          console.log(payload);
          dispatch({
            type: FETCH_PRODUCTS,
            payload: payload,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};

export const createProduct = (userId, token, product) => {
  let bearer = "Bearer " + token;
  return (dispatch) => {
    fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Authorization: bearer,
        Accept: "application/json",
      },
      body: product,
    })
      .then((res) => {
        res.json().then((prod) => {
          console.log(prod);
          const payload = {
            product_id: prod._id,
            product_title: prod.name,
            product_price: prod.price,
            category_name: prod.category,
            product_description: prod.description,
          };
          dispatch({
            type: ADD_PRODUCT,
            payload: payload,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
export const updateProduct = (userId, token, productId, product, category) => {
  let bearer = "Bearer " + token;
  return (dispatch) => {
    fetch(`${API}/product/${productId}/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: bearer,
        Accept: "application/json",
      },
      body: product,
    })
      .then((res) => {
        res.json().then((prod) => {
          const payload = {
            product_id: prod._id,
            product_title: prod.name,
            product_price: prod.price,
            category_name: prod.category,
            product_description: prod.description,
          };
          dispatch({
            type: UPDATE_PRODUCT,
            payload: payload,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
export const deleteProduct = (userId, token, productId) => {
  let bearer = "Bearer " + token;
  return (dispatch) => {
    fetch(`${API}/product/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: bearer,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((product) => {
          dispatch({
            type: DELETE_PRODUCT,
            payload: productId,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
