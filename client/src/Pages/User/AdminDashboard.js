import React from "react";
import Categories from "./Dashboard/Tables/Categories";
import Products from "./Dashboard/Tables/Products";
import Orders from "./Dashboard/Tables/Orders";
import { connect } from "react-redux";
import { fetchCats } from "../../Redux/Category/categoryActions";
import { API } from "../../backend";

const fetchSetCategories = (props) => {
  props.fetchCats();
};

// const fetchSetProducts = (props) => {
//   fetch(`${API}/products`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       res.json().then((data) => {
//         props.fetchProds(data);
//       });
//     })
//     .catch((err) => console.log(err));
// };

const fetchSetOrders = (props) => {
  fetch(`${API}/orders`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      
      res.json().then((data) => {

        props.fetchOrders(data);

      });
    })
    .catch((err) => console.log(err));
};

const fetchSetProducts = (props) => {
  fetch(`${API}/products`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      
      res.json().then((data) => {
        
        props.fetchProds(data);
      });
    })
    .catch((err) => console.log(err));
};

const fetchSetOrders = (props) => {
  fetch(`${API}/orders`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      
      res.json().then((data) => {
        
        props.fetchOrders(data);
      });
    })
    .catch((err) => console.log(err));
};


  


const AdminDashboard = (props) => {
  
  return (
    
    <div className="container" style={{ marginBottom: "10px" }}>
      <div className="row">
        <div class="col-sm-12">
          <h2 className="text-center">Welcome to Admin Dashboard</h2>
          <hr />
          <div class="col-xs-3">
            <ul class="nav nav-tabs tabs-left">
              <li class="active">
                <a href="#home" data-toggle="tab">
                  Profile
                </a>
              </li>
              <li>
                <a href="#profile" data-toggle="tab">
                  Manage Categories
                  {fetchSetCategories(props)}
                </a>
              </li>
              <li>
                <a href="#messages" data-toggle="tab">
                  Manage Products
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
                Home Tab.
              </div>
              <div class="tab-pane" id="profile">

                <Categories Categories={props.categories}/>
              </div>
              <div class="tab-pane" id="messages">
               <Products Products={props.products}/>
              </div>
              <div class="tab-pane" id="settings">
                <Orders Orders={props.orders}/>

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
    categories: state.categoryReducer.categories,
    products:state.productReducer.products

  };
};

const mapDispatchtoProps = {
  fetchCats,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminDashboard);
