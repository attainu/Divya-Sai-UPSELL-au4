import React, { Component } from 'react';
import Banner from '../../Components/Banner';
import {withRouter, Redirect} from 'react-router';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AddtoCart} from '../../Redux/Cart/cartActions';



class ProductDetailsPage extends Component {
     state = {
        quantity:"1",
        deliverydate:"",
        selHour:"",
        selMin:"",
        AMPM:"AM",
        product: this.props.products.find(product => product.product_id == this.props.match.params.id),
        validationMessage:""
    }
    constructor(props){
        super(props);
    }

    addtocart = (cartitem)=>{
        console.log(cartitem);
        if(cartitem.quantity<=0){
            this.setState({validationMessage:"Please enter the quantity greater than 0"});
        }
        else if(cartitem.deliverydate==""){
            this.setState({validationMessage:"Please choose delivery date"});
        }
        else if(cartitem.selHour==""){
            this.setState({validationMessage:"Please choose an appropriate time in Hours"});
        }
        else if(cartitem.selMin==""){
            this.setState({validationMessage:"Please choose an appropriate time in Minutes"});
        }
        else{
            this.setState({validationMessage:""});
            this.props.AddtoCart(cartitem);
            this.props.history.push("/cart");
        }
        
        
    }

    render () {
                    let today = new Date();
                    today.setDate(today.getDate() + 2);
                    let day = today.getDate();
                    let month = today.getMonth()+1; //January is 0
                    let year = today.getFullYear();
                   
                        if(day<10){
                                day='0'+day
                            } 
                        if(month<10){
                            month='0'+month
                        }
                        today = year+'-'+month+'-'+day;
                        console.log(today);

                        
            return (
            <div>
                <Banner imgName="productdetailsbanner.jpg" />
                <div class="product-detail-order-wrapper container">
                    <div className="product-detail-order-image ">
                        <img src={"../"+this.state.product.product_image} alt={this.state.product.product_title}/>
                    </div>

                    <div className="product-detail-order-form" style={{"min-height":"525px"}}>
                        <form>
                        <div className="form-group">
                            <label name="product_title"><h1>{this.state.product.product_title}</h1></label>
                            <p>Rs. {this.state.product.product_price}/-</p>
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Delivery Date</label>
                            <input name="delDate" type="date" min={today} className="form-control" style={{margin:"10px"}} 
                            value={this.state.deliverydate} 
                            onChange={(e)=>this.setState({deliverydate:e.target.value})} 
                            required/>
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Delivery Time</label>
                            <select name="selHour" value={this.state.selHour} 
                            onChange={(e)=>this.setState({selHour:e.target.value})} className="form-control"
                            style={{margin:"10px"}} required>
                                <option selected="selected" value="">Select Hour</option>
                                <option value="00">00</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select name="selMin" value={this.state.selMin} 
                            onChange={(e)=>this.setState({selMin:e.target.value})} style={{margin:"10px"}}
                             className="form-control">
                                <option selected="selected" value="">Select Minute</option>
                                <option value="00">00</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                            </select>
                            <select name="AMPM" value={this.state.AMPM} 
                            onChange={(e)=>this.setState({AMPM:e.target.value})}
                            style={{margin:"10px"}}
                            className="form-control" required>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                           
                            </div>

                            <div className="form-group">
                                <label className="col-form-label">Quantity</label>
                                <input name="quantity" type="number" min="1"
                                style={{margin:"10px"}} defaultValue="1" className="form-control"  onChange={(e)=>this.setState({quantity:e.target.value})} required/>
                            </div>

                            
                           <button type="button" 
                            onClick={()=>this.addtocart({
                                quantity:this.state.quantity,
                                deliverydate:this.state.deliverydate,
                                selHour:this.state.selHour,
                                selMin:this.state.selMin,
                                producttitle:this.state.product.product_title,
                                productprice:this.state.product.product_price,
                                productid:this.state.product.product_id,
                                productimage:this.state.product.product_image,
                                AMPM:this.state.AMPM
                            }
                            
                            )}
                            className="btn btn-color btn-block" >
                            
                            ADD TO CART</button>
                            
                           
                          </form> 
                          <span style={{color:"red",display:"inline-block",padding:"10px"}}>{this.state.validationMessage}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStatetoProps = state => {
    return {
            products:state.productReducer.products,
            cart:state.cartReducer.cart
    }
}

const MapDispatchtoProps = {
    AddtoCart
}

export default connect(MapStatetoProps, MapDispatchtoProps)(withRouter(ProductDetailsPage));