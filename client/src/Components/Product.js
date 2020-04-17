import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    render () {
        const {product_id,product_image,product_title, product_price} = this.props.details;
        return (
            <React.Fragment>
                <div class="product-detail">
                <Link to={`/productdetails/${product_id}`} >
                <div class="product-wrapper">
                <div className="product-image">
                    <img src={product_image} alt={product_title}/>
                </div>
                <div class="product-text">
                <div className="product-title-price">
                    <h4>{product_title}</h4>
                    <p>Rs. {product_price}/-</p>
                </div>
                <div className="hover-cart">
                <a href="/cart">
                    <i className="fa fa-2x fa-shopping-cart"></i>
                    </a>
                </div>
                </div>
                </div>
                </Link>
            </div> 
            </React.Fragment>
        )
    }
}

export default Product;