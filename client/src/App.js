import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
//Components
import Header from "./Components/Header";

import Footer from "./Components/Footer";

//Pages
import HomePage from "./Pages/User/HomePage/HomePage";
import AboutPage from "./Pages/User/AboutPage";
import ShopPage from "./Pages/User/ShopPage";
import ContactPage from "./Pages/User/ContactPage";

import ProductDetailsPage from "./Pages/User/ProductDetailsPage";

import Login_Register_Page from "./Pages/Login_Register_Page";
import CartPage from "./Pages/User/CartPage";
import CheckoutPage from "./Pages/User/CheckoutPage";
import TrackYourOrderPage from "./Pages/User/TrackYourOrderPage";
import { API } from "./backend";

class App extends React.Component {
  render() {
    console.log("API IS", API);
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login-register" component={Login_Register_Page} />
          <Route path="/productdetails/:id" component={ProductDetailsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/trackorder" component={TrackYourOrderPage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
