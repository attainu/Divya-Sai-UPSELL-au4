import React, { useEffect } from "react";
import { connect } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { updateProduct } from "../../../../Redux/Product/ProductActions";
import { isAuthenticated } from "../../../../auth/helper/index";
import { API } from "../../../../backend";
const { user, token } = isAuthenticated();
const UpdateProduct = (props) => {
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
  useEffect(() => {
    //TODO: looks like unnecessary code. look into it later
    console.log(props.productId);
  }, []);
  const getOneProduct = (id) => {
    fetch(`${API}/product/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          const { name, description, price, category } = data;
          //   console.log(category._id);
          setValues({
            ...values,
            name: name,
            description: description,
            price: price,
            category: category,
            formData: new FormData(),
          });
        });
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    console.log(name, value);
    values.formData.set(name, value);
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    //
    console.log(values);
    event.preventDefault();
    props.updateProduct(
      user._id,
      token,
      props.productId,
      values.formData,
      values.category
    );
    setOpen(false);
  };
  return (
    <>
      <a
        href="#"
        class="edit"
        onClick={(e) => {
          setOpen(true);
          getOneProduct(props.productId);
        }}
      >
        <i class="material-icons" data-toggle="tooltip" title="Edit">
          &#xE254;
        </i>
      </a>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Edit Product</h2>
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
              value={values.name}
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
              value={values.description}
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
              value={values.price}
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
    </>
  );
};
const mapDispatchtoProps = {
  updateProduct,
};
export default connect(null, mapDispatchtoProps)(UpdateProduct);
