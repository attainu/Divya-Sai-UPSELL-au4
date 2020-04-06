import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
//Components
import Header from './Components/Header';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

//Pages
import HomePage from './Pages/User/HomePage/HomePage';
import AboutPage from './Pages/User/AboutPage';
import ShopPage from './Pages/User/ShopPage';
import ContactPage from './Pages/User/ContactPage';




class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route  path="/home" component={HomePage}/>
          <Route  path="/about" component={AboutPage}/>
          <Route  path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          {/* <Route  path="/productdetails" component="ProductDetailsPage" /> */}
        </Switch>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
