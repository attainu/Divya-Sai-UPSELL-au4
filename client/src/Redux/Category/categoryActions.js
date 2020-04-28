import { FETCH_SET_CATS } from "./types";

export const fetchCats = (cats) => {
  return {
    type: FETCH_SET_CATS,
    payload: cats,
  };
};
