import { FETCH_SET_CATS } from "./types";
import {API} from "../../backend";
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
          console.log(data);
          // dispatch({ type: FETCH_SET_CATS, payload: data });
        });
      })
      .catch((err) => console.log(err));
  };
};
