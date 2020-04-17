import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
           <React.Fragment>
               <div className="footer-wrapper">
               <div className="container">
                   <div className="row footer">
                        <div className="about">
                            
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL + '/logo-pink.png'}alt="logo"/>
                            </div>
                            <p>
                            Just Cakes Bakeshop, as featured on FOOD NETWORK, is known for it’s clean, modern yet elegant vibe and finely curated high-quality
                            desserts. 
                            </p>
                        </div>
                        <div className="information">
                        <h3>Information</h3>
                            <ul>
                                <li>
                                    <Link to="/about">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact us
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="location">
                        <h3>Reach us</h3>
                            <address>
                                House No.32, Adarash Nagar,
                                Ward No.13, Near Bhagwaanpura Rd,
                                Samrala, distt. Ludhiana, Punjab
                            </address>
                            
                        </div>
                        <div className="follow">
                        <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <Link to="">
                                    <i className="fa fa-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                    <i className="fa fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                   </div>
               </div>
               </div>
           </React.Fragment>
        )
    }
}

export default Footer