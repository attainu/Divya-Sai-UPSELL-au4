import React, { Component } from "react";
import Banner from "../../../Components/Banner";

import CategoryBanner from "../../../Components/CategoryBanner";
import ProductList from "../../../Components/ProductList";

import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner imgName="homepagebanner.jpg" />
        <CategoryBanner />
        <div className="container">
          <h2 className="featured-products">FEATURED PRODUCTS</h2>
          <ProductList products={this.props.products.slice(0, 4)} />
        </div>
        <Banner imgName="customdesign.png" />
      </React.Fragment>
    );
  }
}

let mapStatetoProps = (state) => {
  return {
    products: state.productReducer.products,
  };
};

let mapDispatchtoProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(HomePage);
