import React from "react";
import { connect } from "react-redux";
import { isAuthenticated } from "../../../../auth/helper/index";
const { user, token } = isAuthenticated();
class UserOrders extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.Orders);
  }
  render() {
    let ordersData = this.props.Orders.map((order) => {
      if (order.products.length) {
        return (
          <tr>
            <td>
              <span class="custom-checkbox">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="options[]"
                  value="1"
                />
                <label for="checkbox1"></label>
              </span>
            </td>
            <td>{order.transaction_id}</td>
            <td>
              {order.products.length > 1
                ? `${order.products[0].producttitle} + ${order.products.length}`
                : `${order.products[0].producttitle}`}
            </td>
            <td>{order.amount}</td>
            <td>{order.status}</td>
          </tr>
        );
      }
    });
    return (
      <div>
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>
                  Manage <b>Orders</b>
                </h2>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label for="selectAll"></label>
                  </span>
                </th>
                <th>Order Id</th>
                <th>Product Title</th>
                <th>Total Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.Orders.length === 0 ? <tr></tr> : ordersData}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    orders: state.ordersReducer.userOrders,
  };
};
const mapDispatchtoProps = {};
export default connect(mapStatetoProps, mapDispatchtoProps)(UserOrders);
