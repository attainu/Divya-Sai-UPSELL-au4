import React, { useEffect } from "react";
import { connect } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { fetchCats } from "../../../../Redux/Category/categoryActions";
import {
  createProduct,
  getAllProducts,
  deleteProduct,
} from "../../../../Redux/Product/ProductActions";
import { isAuthenticated } from "../../../../auth/helper/index";
import UpdateProduct from "./UpdateProduct";
const { user, token } = isAuthenticated();

const Products = (props) => {
  const [values, setValues] = React.useState({
    name: "",
    description: "",
    price: "",
    photo: "",
    category: "",
    createdProduct: "",
    formData: "",
  });
  const [open, setOpen] = React.useState(false);
  const {
    name,
    description,
    price,
    photo,
    category,
    createdProduct,
    formData,
  } = values;

  useEffect(() => {
    //TODO: looks like unnecessary code. look into it later

    setValues({ ...values, formData: new FormData() });
    props.getAllProducts();
    console.log(props.products);
  }, []);
  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    console.log(name, value);
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    //
    console.log(values);
    event.preventDefault();
    props.createProduct(
      isAuthenticated().user._id,
      isAuthenticated().token,
      formData
    );
    setOpen(false);
  };
  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdProduct ? "" : "none" }}
      >
        <h4>{createdProduct} created successfully</h4>
      </div>
    );
  };

  return (
    <div>
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6">
              <h2>
                Manage <b>Products</b>
              </h2>
            </div>
            <div class="col-sm-6">
              <a
                href="#addEmployeeModal"
                onClick={(e) => setOpen(true)}
                style={{ "padding-right": "10px" }}
              >
                <i class="material-icons">&#xE147;</i>
                <span style={{ "vertical-align": "top" }}>Add New Product</span>
              </a>
              <Modal open={open} onClose={() => setOpen(false)}>
                <h2>Add Product</h2>
                {successMessage()}
                <form>
                  <div class="form-group">
                    <label>photo</label>
                    <input
                      type="file"
                      name="photo"
                      accept="image"
                      placeholder="Choose an image"
                      className="form-control"
                      onChange={handleChange("photo")}
                    />
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter product name"
                      className="form-control"
                      onChange={handleChange("name")}
                    />
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Enter product description"
                      className="form-control"
                      onChange={handleChange("description")}
                    />
                  </div>

                  <div class="form-group">
                    <label>Category</label>
                    <select
                      className="form-control"
                      name="category"
                      onChange={handleChange("category")}
                    >
                      <option>Select</option>
                      {props.categories.map((cat, idx) => (
                        <option key={idx} value={cat.id}>
                          {cat.category_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      name="price"
                      placeholder="Enter product price"
                      className="form-control"
                      onChange={handleChange("price")}
                    />
                  </div>

                  <button
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </form>
              </Modal>
            </div>
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
              <th>Id</th>
              <th>Title</th>
              <th>Category</th>
              <th>Image</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {console.log(props.products)}
            {props.products.map((product) => {
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
                  <td>{product.product_id}</td>
                  <td>{product.product_title}</td>

                  <td>
                    {product.category_name
                      ? product.category_name.name
                      : "null"}
                  </td>
                  <td>Image</td>
                  {console.log(product.category_name)}
                  <td>{product.product_price}</td>
                  <td>
                    {console.log("rerender")}
                    <UpdateProduct
                      productId={product.product_id}
                      categories={props.categories}
                    />

                    <a
                      onClick={() =>
                        props.deleteProduct(user._id, token, product.product_id)
                      }
                      class="delete"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
    products: state.productReducer.products,
  };
};
const mapDispatchtoProps = {
  fetchCats,
  createProduct,
  deleteProduct,
  getAllProducts,
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Products);
