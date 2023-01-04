import { add_product, delete_product } from "./actionTypes"

export const addProductAction =(product) =>{
    return{
        type : add_product,
        payload : product
    }
}

export const deleteProductAction = (product) =>{
    return{
        type : delete_product,
        payload : product
    }
}