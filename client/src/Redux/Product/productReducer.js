import {
  FILTER_BY_CATEGORY,
  FILTER_BY_SEARCH,
  SET_SEARCH_TERM,
  UPDATE_PRODUCT,
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
} from "./types";

const INITIAL_STATE = {
  products: [],
  FilteredProducts: [],
  searchterm: "",
};
//   {
//     product_id:1,
//     product_image:"images/Product_Images/Wedding-Cake1.jpg",
//     product_title:"Chocolate Cake",
//     product_price:1000,
//     category_name:"Wedding Cakes"
// }

export const productReducer = (state = INITIAL_STATE, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  let filtered = [];
  let filter = [];
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      console.log("state", action.type, action.payload.category);
      if (action.payload.category.length !== 0 && action.payload.price === 0) {
        console.log("Only category is given");
        var innerfilter = [];

        filter = action.payload.category.map((cat) => {
          innerfilter = stateCopy.products.filter((product) => {
            console.log(product.category_name, cat);
            return product.category_name === cat;
          });
          console.log(innerfilter);
          return innerfilter;
        });

        let [...args] = filter;
        args.map((array) => {
          array.map((elem) => {
            filtered.push(elem);
          });
        });
      }

      if (action.payload.category.length === 0 && action.payload.price !== 0) {
        console.log("Only price is given");
        filtered = stateCopy.products.filter((product) => {
          return product.product_price <= action.payload.price;
        });
      }
      if (action.payload.category.length !== 0 && action.payload.price !== 0) {
        console.log("Both category and price are given");
        var innerfilter = [];

        filter = action.payload.category.map((cat) => {
          innerfilter = stateCopy.products.filter((product) => {
            console.log(product.category_name, cat);
            return (
              product.category_name === cat &&
              product.product_price <= action.payload.price
            );
          });
          console.log(innerfilter);
          return innerfilter;
        });

        let [...args] = filter;
        args.map((array) => {
          array.map((elem) => {
            filtered.push(elem);
          });
        });
      }

      console.log(filtered);

      return { ...state, FilteredProducts: filtered };
    case FILTER_BY_SEARCH:
      console.log("state", action.type, action.payload);
      stateCopy.searchterm = action.payload;
      filter = stateCopy.products.filter((product) => {
        return (
          product.category_name.name
            .toLowerCase()
            .indexOf(action.payload.toLowerCase()) !== -1 ||
          product.product_title
            .toLowerCase()
            .indexOf(action.payload.toLowerCase()) !== -1
        );
      });
      console.log(filter);
      filter.map((product) => {
        filtered.push(product);
      });

      return {
        ...state,
        FilteredProducts: filtered,
        searchterm: action.payload,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      const updatedProds = state.products.filter(
        (prod) => prod.product_id !== action.payload.product_id
      );
      return {
        ...state,
        products: [...updatedProds, action.payload],
      };
    case DELETE_PRODUCT:
      const newProds = state.products.filter(
        (prod) => prod.product_id !== action.payload
      );
      return { ...state, products: [...newProds] };

    // case SET_SEARCH_TERM:
    //                         console.log(action.type, action.payload);
    //                         stateCopy.searchterm = action.payload;
    //                         return {...state, searchterm:action.payload};

    default:
      return state;
  }
};
