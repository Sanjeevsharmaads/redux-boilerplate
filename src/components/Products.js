import React from "react";
import { getProducts } from '../actions/products';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import productCss from "./product.css"

const Products = ({getProducts, products}) => {
        console.log("products are", products)
        return <div className="main-container">
            <h1> Hello Welcome to Products page</h1>
            <button className="load-products-button" onClick={getProducts}>Load Products</button>
            <div className="container">
            {
                products?.map((eachProduct) => {
                    return <div className="product-container">
                        <img className="product-image" src={eachProduct?.images && eachProduct?.images[0]} />
                        <ul className="product-list">
                        <li>{eachProduct?.title}</li>
                        <li className="product-description">{eachProduct?.description}</li>
                        <li>{eachProduct?.category}</li>
                        </ul>
                        </div>
                })
            }
            </div>
        </div>
}

const mapStateToProps = (state) => {
    console.log("products are", state)
    return {
        products: state?.productsReducer?.products
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getProducts: getProducts
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);