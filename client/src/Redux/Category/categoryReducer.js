const INITIAL_STATE = {
    categories: [
         {
             category_id:1,
             category_name:"Wedding Cakes"
         },
         {
            category_id:2,
            category_name:"Birthday Cakes"
         }    
 ]
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
 switch (action.type) {
   
   default:
     return state;
 }
};