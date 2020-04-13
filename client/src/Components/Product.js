import React, { Component } from 'react';

class Product extends Component {
    render () {
        const {product_image,product_title, product_price} = this.props.details;
        return (
            <React.Fragment>
                <div class="product-detail">
                <div className="product-image">
                    <img src={product_image} alt={product_title}/>
                </div>
                <div className="product-title-price">
                    <h4>{product_title}</h4>
                    <p>{product_price}</p>
                </div>
                <div className="hover-cart">
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </div> 
            </React.Fragment>
        )
    }
}

export default Product;