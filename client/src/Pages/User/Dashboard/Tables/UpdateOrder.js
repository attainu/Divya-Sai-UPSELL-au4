import React, { useEffect } from "react";
import { connect } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { setOrderStatus } from "../../../../Redux/orders/OrdersActions";
import { isAuthenticated } from "../../../../auth/helper/index";
import { API } from "../../../../backend";
const { user, token } = isAuthenticated();
const UpdateOrder = (props) => {
  //   const [values, setValues] = React.useState({
  //     name: "",
  //     description: "",
  //     price: "",
  //     photo: "",
  //     category: "",
  //     createdProduct: "",
  //     formData: "",
  //   });
  const [status, setStatus] = React.useState([
    "Cancelled",
    "Delivered",
    "Shipped",
    "Processing",
    "Received",
  ]);
  const [selectedStatus, setSelectedStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    //TODO: looks like unnecessary code. look into it later
    console.log(props.productId);
  }, []);
  const getOneProduct = (id) => {
    // fetch(`${API}/product/${id}`, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     res.json().then((data) => {
    //       const { name, description, price, category } = data;
    //       //   console.log(category._id);
    //       setValues({
    //         ...values,
    //         name: name,
    //         description: description,
    //         price: price,
    //         category: category,
    //         formData: new FormData(),
    //       });
    //     });
    //   })
    //   .catch((err) => console.log(err));
  };
  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const onSubmit = (event) => {
    //
    // console.log(values);
    event.preventDefault();
    // props.updateProduct(
    //   user._id,
    //   token,
    //   props.productId,
    //   values.formData,
    //   values.category
    // );
    props.setOrderStatus(
      isAuthenticated().user._id,
      props.orderId,
      isAuthenticated().token,
      selectedStatus
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
        <h2>Edit Order</h2>
        <form>
          <div class="form-group">
            <label>Status</label>
            <select
              className="form-control"
              name="category"
              onChange={(e) => handleChange(e)}
            >
              <option>Select</option>
              {status.map((stat, idx) => (
                <option key={idx} value={stat}>
                  {stat}
                </option>
              ))}
            </select>
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
  setOrderStatus,
};
export default connect(null, mapDispatchtoProps)(UpdateOrder);
