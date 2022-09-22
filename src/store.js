import { applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import postReducer from './reducers/post'
import productsReducer from './reducers/products'
import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from 'redux'

const initialState ={}

const allReducers = combineReducers({
    postReducer,
    productsReducer
})

const middleware =[thunk];
const store = configureStore({reducer: allReducers}, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store