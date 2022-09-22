import axios from 'axios'
import { GET_PRODUCTS_ERROR, GET_PRODUCTS } from './types';

// Posts action
export const getProducts = () => async dispatch => {

    try {
        const res = await axios.get('https://dummyjson.com/products');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: err
        })
    }
}