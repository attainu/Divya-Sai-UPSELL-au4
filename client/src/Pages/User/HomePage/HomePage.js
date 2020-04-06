import React, { Component } from 'react';
import Banner from '../../../Components/Banner';


import CategoryBanner from '../../../Components/CategoryBanner'; 
import ProductList from '../../../Components/ProductList';


class HomePage extends Component {
    render () {
        return (
            <React.Fragment>
               <Banner imgName="homepagebanner.jpg"/>
               <CategoryBanner />
               <h2 className="featured-products">FEATURED PRODUCTS</h2>
               <ProductList />
               <Banner imgName="customdesign.png"/>
               
            </React.Fragment>
        )
    }
}

export default HomePage;