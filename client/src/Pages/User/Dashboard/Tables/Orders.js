import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../../../Redux/orders/OrdersActions";
import { isAuthenticated } from "../../../../auth/helper/index";
const { user, token } = isAuthenticated();
class Orders extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchOrders(user._id, token);
  }
  render() {
    console.log(this.props.orders);
    let ordersData = this.props.orders.map((order) => {
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
          <td>{order.id}</td>
          <td>{order.products[0].producttitle}</td>

          <td>{order.price}</td>
          <td>{order.status}</td>
          <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
              <i class="material-icons" data-toggle="tooltip" title="Edit">
                &#xE254;
              </i>
            </a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
              <i class="material-icons" data-toggle="tooltip" title="Delete">
                &#xE872;
              </i>
            </a>
          </td>
        </tr>
      );
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
                <th>Product Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.orders.length === 0 ? <tr></tr> : ordersData}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    orders: state.ordersReducer.orders,
  };
};
const mapDispatchtoProps = {
  fetchOrders,
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Orders);
