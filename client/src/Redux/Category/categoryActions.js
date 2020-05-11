import {
  FETCH_SET_CATS,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "./types";
import { API } from "../../backend";
export const fetchCats = () => {
  return (dispatch) => {
    fetch(`${API}/categories`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          const payload = data.map((cat) => ({
            id: cat._id,
            category_name: cat.name,
            isChecked: false,
          }));
          dispatch({
            type: FETCH_SET_CATS,
            payload: payload,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
export const addCategory = (userId, token, name) => {
  let catName = {
    name,
  };
  let bearer = "Bearer " + token;
  return (dispatch) => {
    fetch(`${API}/category/create/${userId}`, {
      method: "POST",
      headers: {
        Authorization: bearer,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(catName),
    })
      .then((res) => {
        res.json().then((data) => {
          let payload = {
            id: data.cat._id,
            category_name: data.cat.name,
            isChecked: false,
          };
          dispatch({
            type: ADD_CATEGORY,
            payload: payload,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
export const updateCategory = (userId, catId, token, name) => {
  let catName = {
    name,
  };
  let bearer = "Bearer " + token;
  return (dispatch) => {
    fetch(`${API}/category/${catId}/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: bearer,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(catName),
    })
      .then((res) => {
        res.json().then((data) => {
          let updatedCat = {
            id: data._id,
            category_name: data.name,
            isChecked: false,
          };
          dispatch({
            type: UPDATE_CATEGORY,
            payload: updatedCat,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
export const removeCategory = (userId, token, catId) => {
  let bearer = "Bearer " + token;
  return (dispatch) => {
    fetch(`${API}/category/${catId}/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: bearer,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(catId);
          dispatch({
            type: DELETE_CATEGORY,
            payload: catId,
          });
        });
      })
      .catch((err) => console.log(err));
  };
};
