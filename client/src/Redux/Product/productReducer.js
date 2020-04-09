import { FILTER_BY_CATEGORY } from './types';

const INITIAL_STATE = {
       products: [
            {   
                product_id:1,
                product_image:"images/Product_Images/Wedding-Cake1.jpg",
                product_title:"Chocolate Cake",
                product_price:750,
                category_id:1,
                category_name:"Wedding Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake2.jpg",
                product_title:"Vanilla Cake",
                product_price:750,
                category_name:"Wedding Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake3.jpg",
                product_title:"Strawberry Cake",
                product_price:750,
                category_name:"Wedding Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake4.jpg",
                product_title:"Butter-Scotch Cake",
                product_price:750,
                category_name:"Wedding Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake5.jpg",
                product_title:"PineApple Cake",
                product_price:750
            },
            {
                product_image:"images/Product_Images/Wedding-Cake6.jpg",
                product_title:"Black Forest Cake",
                product_price:750
            },
            {
                product_image:"images/Product_Images/Wedding-Cake7.jpg",
                product_title:"Dark Chocolate Cake",
                product_price:750
            },
            {
                product_image:"images/Product_Images/Wedding-Cake8.jpg",
                product_title:"Blueberry Cake",
                product_price:750
            }
    ],
    FilteredProducts:[]
  };
  
  export const productReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
      
        case FILTER_BY_CATEGORY: 
                                console.log("state", action.type );
                               let newProducts =  state.products;

                               let filtered = newProducts.filter((product)=>
                                            {return (product.category_name===action.payload)});
                                console.log(filtered);
                                
                                return {...state, FilteredProducts:filtered};

      default:
        return state;
    }
  };