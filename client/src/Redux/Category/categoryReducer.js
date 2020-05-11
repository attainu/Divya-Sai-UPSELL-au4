import {
  FETCH_SET_CATS,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "./types";
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
    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };
    case DELETE_CATEGORY:
      const newCats = state.categories.filter(
        (cat) => cat.id !== action.payload
      );
      return { ...state, categories: [...newCats] };
    case UPDATE_CATEGORY:
      const updatedCats = state.categories.filter(
        (cat) => cat.id !== action.payload.id
      );
      return { ...state, categories: [...updatedCats, action.payload] };
    default:
      return state;
  }
};
