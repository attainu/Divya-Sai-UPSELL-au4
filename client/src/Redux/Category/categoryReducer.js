import { FETCH_SET_CATS } from "./types";
const INITIAL_STATE = {
  categories: [],
};
// {
//   category_id: 1,
//   category_name: "Wedding Cakes",
//   isChecked: false,
// },
// {
//   category_id: 2,
//   category_name: "Birthday Cakes",
//   isChecked: false,
// },
export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SET_CATS:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
