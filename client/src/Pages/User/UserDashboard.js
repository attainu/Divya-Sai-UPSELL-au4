import React, { useEffect } from "react";
import Categories from "./Dashboard/Tables/Categories";
import Products from "./Dashboard/Tables/Products";
import Orders from "./Dashboard/Tables/Orders";
import { connect } from "react-redux";
import { fetchUserOrders } from "../../Redux/orders/OrdersActions";
import Profile from "./Dashboard/Profile";
import { isAuthenticated } from "../../auth/helper";
import UserOrders from "./Dashboard/Tables/UserOrders";

const UserDashboard = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    props.fetchUserOrders(isAuthenticated().user._id, isAuthenticated().token);
  }, []);

  return (
    <div className="container" style={{ marginBottom: "10px" }}>
      <div className="row">
        <div class="col-sm-12">
          <h2 className="text-center">Welcome to User Dashboard</h2>
          <hr />
          <div class="col-xs-3">
            <ul class="nav nav-tabs tabs-left">
              <li class="active">
                <a href="#home" data-toggle="tab">
                  Profile
                </a>
              </li>
              <li>
                <a href="#settings" data-toggle="tab">
                  Manage Orders
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xs-9">
            <div class="tab-content">
              <div class="tab-pane active" id="home">
                <Profile userData={isAuthenticated().user} />
              </div>
              <div class="tab-pane" id="settings">
                {!props.userOrders.length ? null : (
                  <UserOrders Orders={props.userOrders} />
                )}
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    userOrders: state.ordersReducer.userOrders,
  };
};

const mapDispatchtoProps = {
  fetchUserOrders,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(UserDashboard);
