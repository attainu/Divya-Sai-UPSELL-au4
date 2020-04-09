import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render () {
        return (
            <React.Fragment>
           <div className="container">
               <div className="row top-header">
                   <div className="contact-details">
                        <ul>
                            <li>Welcome to our Store</li>
                            <li><i className="fa fa-phone mr-2"></i>98490-84400</li>
                            <li className="last"><i class="fa fa-whatsapp mr-2"></i>84275-16270</li>
                        </ul>
                   </div>
                   <div className="free-delivery-info">
                    <p>Free Delivery on order over <i className="fa fa-inr"></i>500/-</p>
                   </div>
               </div>
               </div>
               <div className="full-border"></div>

                <div className="container">
               <div className="row bottom-header">
                   <div className="logo">
                       <Link to="/"><img src="logo.png" alt="logo"/></Link>
                   </div>

                   <nav className="navigation">
                       <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                       </ul>
                   </nav>

                    <nav className="nav-icons">
                    <ul>
                            <li><Link to=""><i className="fa fa-search"></i></Link></li>
                            <li><Link to="/login-register"><i className="fa fa-user"></i></Link></li>
                            <li><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></li>
                            
                       </ul>
                    </nav>

                   
               </div>
           </div>
           </React.Fragment>
        )
    }
}

export default Header;
