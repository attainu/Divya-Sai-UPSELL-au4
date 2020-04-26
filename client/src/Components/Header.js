import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {FILTER_BY_SEARCH_METHOD, SET_SEARCH_TERM_METHOD} from '../Redux/Product/ProductActions';

class Header extends Component {

    state={
        searchterm:"",
        showMe:false
    }

    componentDidUpdate(prevState, prevProps){
        if(prevState.searchterm!==this.state.searchterm){
            this.props.FILTER_BY_SEARCH_METHOD(this.state.searchterm);
        }
    }
      

    handleToggle(){
        if(this.state.showMe){
            this.setState({showMe:false})
        }
        else{
            this.setState({showMe:true})
        }
    }

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
                       <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/></Link>
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
                            <li>
                                    {
                                        this.state.showMe?
                                        <input type="text" onChange={(e)=>{
                                            this.setState({searchterm:e.target.value});
                                            this.props.history.push("/shop");
                                            
                                        }}
                                            style={{"width":"200px", "margin-right":"10px"}}/>:
                                        null
                                    }
                                    <i className="fa fa-search" onClick={()=>this.handleToggle()}></i>
                                
                            </li>
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

const mapDispatchtoProps = {
    FILTER_BY_SEARCH_METHOD,
    SET_SEARCH_TERM_METHOD
}

export default withRouter(connect(null,mapDispatchtoProps)(Header));
