import { GET_PRODUCTS_ERROR, GET_PRODUCTS } from '../actions/types'

const initialState ={
    loading: true,
    products: []
}

export default function(state = initialState, action){
    console.log("product Action is",action)
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: action.payload.products
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                products: null
            }
        default:
            return state;
    }
}