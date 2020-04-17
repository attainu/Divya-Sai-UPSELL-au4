import React, { Component } from 'react';
import Banner from '../../Components/Banner';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CartPage extends Component {

    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
               <div className="container">
                 
                {!this.props.cartitems.length<=0 && 

                <table id="cart" class="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th style={{width:"50%"}}>Product</th>
                        <th style={{width:"10%"}}>Price</th>
                        <th style={{width:"8%"}}>Quantity</th>
                        <th style={{width:"22%"}} class="text-center">Subtotal</th>
                        <th style={{width:"10%"}}></th>
                    </tr>
                </thead>
                <tbody>  
                 {
                    this.props.cartitems.map((item,index)=>{
                     
                    return(
                        <tr>
                            <td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs">
                                        <img src={item.productimage} alt={item.producttitle} class="img-responsive" style={{width:"100%", height:"100%"}}/>
                                    </div>
									<div class="col-sm-10">
										<h4 class="nomargin">{item.producttitle}</h4>
                                        <p>Delivery Date: {item.deliverydate} </p>
                                        <p>Delivery Time: {item.selHour} : {item.selMin} {item.AMPM}</p>
										 
									</div>
								</div>
							</td>
							<td data-th="Price"><i class="fa fa-inr">{item.productprice}</i></td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value={item.quantity}/>
							</td>
                            <td data-th="Subtotal" class="text-center"><i class="fa fa-inr">
                                {item.quantity*item.productprice}</i></td>
							<td class="actions" data-th="">
								<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
								<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>								
							</td>
                            </tr>
                    )  
                }
                )}
                </tbody>
                
                <tfoot>
						<tr class="visible-xs">
							<td class="text-center"><strong>Total <i class="fa fa-inr"></i>
                                {this.props.total}</strong></td>

						</tr>
						<tr>
							<td><Link to="/shop"><button type="button" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</button></Link></td>
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total <i class="fa fa-inr"></i>
                                {this.props.total}</strong></td>
							<td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>

                </table>
    }

                {this.props.cartitems.length==0 && 

                        <div className="row text-center" style={{height:"355px",border:"1px solid #F3CDCD"}} >

                            <div className="cart-wrapper" style={{margin:"100px auto"}}>
                            <h3>No items Added to Cart.</h3>

                            <Link to="/shop">
                            <button type="button" style={{margin:"20px auto"}}className="btn btn-block btn-color">Continue to Shop</button>
                            </Link>
                            </div>
                        </div>

                }
            
                
               
                    </div>
            </div>

        )
    }
}

const mapStatetoProps = (state)=>{
    return{
        cartitems:state.cartReducer.cart,
        total:state.cartReducer.total
    }
}

const mapDispatchtoProps = {

}

export default connect(mapStatetoProps, mapDispatchtoProps)(CartPage);