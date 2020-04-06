
const INITIAL_STATE = {
       products: [
            {
                product_image:"images/Product_Images/Wedding-Cake1.jpg",
                product_title:"Chocolate Cake",
                product_price:750
            },
            {
                product_image:"images/Product_Images/Wedding-Cake2.jpg",
                product_title:"Vanilla Cake",
                product_price:750
            },
            {
                product_image:"images/Product_Images/Wedding-Cake3.jpg",
                product_title:"Strawberry Cake",
                product_price:750
            },
            {
                product_image:"images/Product_Images/Wedding-Cake4.jpg",
                product_title:"Butter-Scotch Cake",
                product_price:750
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
    ]
  };
  
  export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      
      default:
        return state;
    }
  };