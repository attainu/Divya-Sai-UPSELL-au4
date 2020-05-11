import React, { Component } from "react";
import { connect } from "react-redux";
import { isAuthenticated } from "../auth/helper/index";
import { API } from "../backend";
const { user, token } = isAuthenticated();
class PaymentComplete extends Component {
  componentDidMount() {
    console.log(this.props.match.params.txnId);
    this.handleOrderUpdate(user._id, token);
  }
  handleOrderUpdate(userId, token) {
    const body = {
      txnId: this.props.match.params.txnId,
      products: this.props.cartitems,
      amount: this.props.total,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };
    return fetch(`${API}/order/success/${userId}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="jumbotron text-center" style={{ marginBottom: "0" }}>
        <h1 className="display-3">Thank You!</h1>
        <p className="lead" style={{ marginBottom: "100px" }}>
          <strong>Please check your email</strong> for further information on
          your order.
        </p>
        <hr />
        <p>
          Having trouble? <a href="">Contact us</a>
        </p>
        <p className="lead">
          <button className="btn btn-primary btn-lg" role="button">
            Go To Home
          </button>
        </p>
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

export default connect(mapStatetoProps, null)(PaymentComplete);
