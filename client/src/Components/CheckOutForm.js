import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class CheckOutForm extends Component {

    state = {
                
            }

    constructor(props){
        super(props);
    }
    render () {
        const {cartitems, total} = this.props;
        return (
            <div className="container guest-order-details">
                    <div className="guest-details">
                        
                            <div className="form-row">
                            <h3 className="col-md-6 no-padding">Contact Information</h3>
                            <span className="col-md-6 no-padding" style={{"margin-top": "25px","text-align": "right"}}>Already have an account? <Link to ="/login-register">Login</Link></span>
                            <div className="form-group">
                            <input type="text" className="form-control" 
                            placeholder="Enter your email id or mobile number" required/>
                            </div>
                            </div>

                            <h3>Billing Address</h3>
                           
                            <div className="form-row">

                            <div className="form-group col-md-6 no-padding">
                                <input type="text" className="form-control" id="fname" placeholder="First Name" required/>
                            </div>
                            <div className="form-group col-md-6 no-padding">
                            <input type="text" className="form-control" id="lname" placeholder="Last Name" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            
                            <input type="text" className="form-control" id="inputAddress" placeholder="Address - 1234 Main St" required/>
                        </div>
                        <div className="form-group">
                           
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 no-padding">
                           
                            <input type="text" className="form-control" id="inputCity" placeholder="City" required/>
                            </div>
                            <div className="form-group col-md-4 no-padding">
                            <select id="inputState" className="form-control">
                                <option selected>Select State</option>
                                <option>Punjab</option>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                            </select>
                            </div>
                            <div className="form-group col-md-2 no-padding">
                            
                            <input type="text" className="form-control" id="inputPin" placeholder="PIN"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                            <input style={{"margin-right":"3px"}} className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Save this information for next time
                            </label>
                            </div>
                        </div>

                        <h3>Choose Payment Method</h3>
                        <div className="form-group">

                            <input type="radio" style={{"margin-right":"3px","vertical-align":"text-top"}} name="payoption" value="Online Payment" /> 
                            Online Payment 
                            
                        </div>

                        <div className="form-group">
                            
                            <input type="radio" style={{"margin-right":"3px","vertical-align":"text-top"}} name="payoption" value="Cash on Delivery" /> 
                            Cash on Delivery
                            
                        </div>                                                
                        <Link to="/payment">
                        <button type="button" style={{"margin-bottom":"20px"}} className="btn btn-primary pull-right">PLACE ORDER</button>
                        </Link>
                        </div>
                        
                    <div className="order-details" style={{"background-color":"lightgrey"}}>
                    
                            <h3 style={{"margin-top":"0"}}>Cart Items</h3>
                            {cartitems.map((cartitem)=>{
                               return( 
                                
                                <div className="cart-item-details">
                                <div className="cart-item-image">
                                    <img  style={{height:"80px"}} src={cartitem.productimage} alt={cartitem.producttitle} />
                                </div>
                                <div className="cart-item-text">
                               <h5>{cartitem.producttitle}</h5>
                               <p>Delivery Date: {cartitem.deliverydate}</p>
                               <p>Delivery Time: {cartitem.selHour}:{cartitem.selMin} {cartitem.AMPM}</p>
                               
                                </div>
                                
                               </div>
                               
                               
                               )
                            })}
                             
                             <p className="pull-right">Total: <i class="fa fa-inr"> {total}</i> </p>
                               
                    </div>
            
            </div>
        )
    }
}

const mapStatetoProps = (state)=>{
    return {
             cartitems:state.cartReducer.cart,
             total:state.cartReducer.total
    }
}

const mapDispatchtoProps = {

}

export default connect(mapStatetoProps, mapDispatchtoProps)(CheckOutForm);