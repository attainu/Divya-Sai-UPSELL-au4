import React, { Component } from 'react';
import Product from './Product';

import {connect} from  'react-redux';

class ProductList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="container productlist">
                    
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

let mapStatetoProps = (state)=>{
    return {
        products:state.productReducer.products
        
    }
}

let mapDispatchtoProps = (dispatch)=>{
    return {
        dispatch:dispatch
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ProductList);