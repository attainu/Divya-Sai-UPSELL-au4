import React, { Component } from 'react';
import Banner from '../../Components/Banner';
import ProductList from '../../Components/ProductList';

import Filter from '../../Components/Filter';

import {connect} from 'react-redux';
import CheckBox from '../../Components/CheckBox';
import {FILTER_BY_CATEGORY_METHOD} from './../../Redux/Product/ProductActions';



class ShopPage extends Component {

    

    render () {
        return (
            <React.Fragment>
                <Banner imgName="shoppagebanner.jpg"/>
                <div className="container shop-wrapper">
                    <div className="filter-sidebar">
                    <Filter title="Category"/>
                    {this.props.categories.map((category,index)=>{
                        return (
                         
                            <CheckBox data={category} key={index}/>
                       
                        )})
                    }
                    <Filter title="Price"/>
                    </div>
                    <div className="product-wrapper">
                    <ProductList products={this.props.products}/>
                    
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

let mapStatetoProps = (state)=>{
    return{
        categories:state.categoryReducer.categories,
        products:state.productReducer.products,
        filtered:state.productReducer.FilteredProducts
    }
}

let mapDispatchtoProps = {
    FILTER_BY_CATEGORY_METHOD
}



export default connect(mapStatetoProps, mapDispatchtoProps)(ShopPage);