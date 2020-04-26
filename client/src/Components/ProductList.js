import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="productlist">
                    {this.props.products.map((product,index)=>{
                        return(
                        <Product details={product} key={index} />
                        )
                    })}                    
                </div>
                
            </React.Fragment>
        )
    }
}



export default ProductList;