import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ImageHelper from "./ImageHelper";
import StripeCheckout from "react-stripe-checkout";
import { isAuthenticated } from "../auth/helper/index";
import { API } from "../backend";
const { user, token } = isAuthenticated();
class CheckOutForm extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  createOrder = (userId, token, orderData) => {
    return fetch(`${API}/order/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order: orderData }),
    })
      .then((res) => {
        console.log("CREATEORDER", res);
      })
      .catch((err) => console.log(err));
  };
  makePayment = () => {
    const { user, token } = isAuthenticated();
    const data = {
      purpose: "Cake Order Payment",
      amount: this.props.total,
      buyer_name: user.name,
      email: user.email,
      phone: "9849084400",
      user_id: user._id,
      redirect_url: `${API}/callback?user_id=${user._id}`,
      webhook_url: "/webhook/",
    };
    const headers = {
      "Content-Type": "application/json",
    };

    fetch(`${API}/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then((res) =>
        res.json().then((data) => {
          console.log(data);
          window.location.href = data;
        })
      )
      .catch((err) => console.log(err));

    //Stripe
    // const body = {
    //   token,
    //   products: this.props.cartitems,
    //   totalAmount: (this.props.total / 75.54).toFixed(2),
    // };
    // const headers = {
    //   "Content-Type": "application/json",
    // };
    // return fetch(`${API}/payment`, {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  render() {
    const { cartitems, total } = this.props;
    return (
      <div className="container guest-order-details">
        <div className="guest-details">
          <div className="form-row">
            <h3 className="col-md-6 no-padding">Contact Information</h3>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email id or mobile number"
                required
              />
            </div>
          </div>

          <h3>Billing Address</h3>

          <div className="form-row">
            <div className="form-group col-md-6 no-padding">
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group col-md-6 no-padding">
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address - 1234 Main St"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 no-padding">
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="City"
                required
              />
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
              <input
                type="text"
                className="form-control"
                id="inputPin"
                placeholder="PIN"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                style={{ "margin-right": "3px" }}
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Save this information for next time
              </label>
            </div>
          </div>

          <h3>Choose Payment Method</h3>
          <div className="form-group">
            <input
              type="radio"
              style={{ "margin-right": "3px", "vertical-align": "text-top" }}
              name="payoption"
              value="Online Payment"
            />
            Pay With InstaMojo
          </div>

          {/* <StripeCheckout
            stripeKey="pk_test_3z46VwD5MD3Lc8DboURu7rxL00lZs5Jvwo"
            token={this.makePayment}
            amount={(this.props.total / 75.54).toFixed(2) * 100}
            name="Upsell Payment Services"
            shippingAddress
            billingAddress
          > */}
          <button
            type="button"
            style={{ "margin-bottom": "20px" }}
            className="btn btn-primary pull-right"
            onClick={this.makePayment}
          >
            PLACE ORDER
          </button>
          {/* </StripeCheckout> */}
        </div>

        <div
          className="order-details"
          style={{ "background-color": "lightgrey" }}
        >
          <h3 style={{ "margin-top": "0" }}>Cart Items</h3>
          {cartitems.map((cartitem) => {
            return (
              <div className="cart-item-details">
                <div className="cart-item-image">
                  <ImageHelper
                    productId={cartitem.productid}
                    styles={{ height: "80px" }}
                  />
                  {/* <img  style={{height:"80px"}} src={cartitem.productimage} alt={cartitem.producttitle} /> */}
                </div>
                <div className="cart-item-text">
                  <h5>{cartitem.producttitle}</h5>
                  <p>Delivery Date: {cartitem.deliverydate}</p>
                  <p>
                    Delivery Time: {cartitem.selHour}:{cartitem.selMin}{" "}
                    {cartitem.AMPM}
                  </p>
                </div>
              </div>
            );
          })}

          <p className="pull-right">
            Total: <i class="fa fa-inr"> {total}</i>{" "}
          </p>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    cartitems: state.cartReducer.cart,
    total: state.cartReducer.total,
  };
};

const mapDispatchtoProps = {};

export default connect(mapStatetoProps, mapDispatchtoProps)(CheckOutForm);
