import { FILTER_BY_CATEGORY, FILTER_BY_PRICE } from './types';

const INITIAL_STATE = {
       products: [
            {   
                product_id:1,
                product_image:"images/Product_Images/Wedding-Cake1.jpg",
                product_title:"Chocolate Cake",
                product_price:1000,
                category_id:1,
                category_name:"Wedding Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake2.jpg",
                product_title:"Vanilla Cake",
                product_price:800,
                category_name:"Wedding Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake3.jpg",
                product_title:"Strawberry Cake",
                product_price:1400,
                category_name:"Wedding Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake4.jpg",
                product_title:"Butter-Scotch Cake",
                product_price:1600,
                category_name:"Wedding Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake5.jpg",
                product_title:"PineApple Cake",
                product_price:1200,
                category_name:"Birthday Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake6.jpg",
                product_title:"Black Forest Cake",
                product_price:1400,
                category_name:"Birthday Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake7.jpg",
                product_title:"Dark Chocolate Cake",
                product_price:1600,
                category_name:"Birthday Cakes"
            },
            {
                product_image:"images/Product_Images/Wedding-Cake8.jpg",
                product_title:"Blueberry Cake",
                product_price:1050,
                category_name:"Birthday Cakes"
            }
    ],
    FilteredProducts:[]
  };
  
  export const productReducer = (state = INITIAL_STATE, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    let filtered = [];
    let filter=[];
    switch (action.type) {
      
        case FILTER_BY_CATEGORY: 
                                console.log("state", action.type, action.payload.category );
                                if(action.payload.category.length!==0 && action.payload.price===0){
                                    console.log("Only category is given");
                                    var innerfilter = [];

                                    filter =  action.payload.category.map((cat)=>{
                                                 innerfilter = stateCopy.products.filter((product)=>
                                                    {
                                                    console.log(product.category_name,cat);
                                                    return (product.category_name===cat)
                                                    });
                                                console.log(innerfilter);
                                                return innerfilter;
                                    })

                                    let [...args] = filter;
                                    args.map((array)=>{
                                        array.map((elem)=>{
                                            filtered.push(elem);
                                            
                                        })
                                    })
                                              
                                            }

                                if(action.payload.category.length===0 && action.payload.price!==0){
                                    console.log("Only price is given");
                                    filtered = stateCopy.products.filter((product)=>
                                                {
                                                    return (product.product_price<=action.payload.price)
                                                });
                                            }
                                if(action.payload.category.length!==0 && action.payload.price!==0){

                                    console.log("Both category and price are given");
                                    var innerfilter = [];

                                    filter =  action.payload.category.map((cat)=>{
                                                 innerfilter = stateCopy.products.filter((product)=>
                                                    {
                                                    console.log(product.category_name,cat);
                                                    return (product.category_name===cat && 
                                                        product.product_price<=action.payload.price)
                                                    });
                                                console.log(innerfilter);
                                                return innerfilter;
                                    })

                                    let [...args] = filter;
                                    args.map((array)=>{
                                        array.map((elem)=>{
                                            filtered.push(elem);
                                            
                                        })
                                    })
                                }
                                                                     
                                console.log(filtered);
                                
                                return {...state, FilteredProducts:filtered};
                                
      default:
        return state;
    }
  };