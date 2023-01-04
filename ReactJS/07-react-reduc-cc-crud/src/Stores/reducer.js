import { add_product, delete_product } from "./actionTypes";
import { combineReducers } from "redux";
const defaultState={
    products :[
        {prodName : "shoe",price : 1230, category :"men's wear"},
        {prodName : "shirt",price : 900, category :"women's wear"},
        {prodName : "pant",price : 3299, category :"men's wear"},
    ],
    users :[]
}
export const productsReducer =(state = defaultState,action) =>{
    switch (action.type) {
        case add_product:
            let newProduct = [...state];
            newProduct.push(action.payload);
            return newProduct;
        case delete_product:
            return state.filter((product) => product.prodName !== action.payload.prodName);
        default:
            return state.products;
    }
}
export const usersReducer = (state = defaultState,action)=>{
    switch (action.type) {
        default:
            return state;
    }
}
export const rootReducer = combineReducers({
    products : productsReducer,
    users : usersReducer
})