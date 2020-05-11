import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  addCategory,
  fetchCats,
  updateCategory,
  removeCategory,
} from "../../../../Redux/Category/categoryActions";
import { isAuthenticated } from "../../../../auth/helper/index";
const { user } = isAuthenticated();

const Categories = (props) => {
  const { addCategory, updateCategory, removeCategory } = props;
  const [addCat, setaddCat] = useState(false);
  const [catName, setCatName] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.fetchCats();
  }, []);

  return (
    <div>
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6">
              <h2>
                Manage <b>Categories</b>
              </h2>
            </div>
            <div class="col-sm-6">
              <a
                href="#addEmployeeModal"
                onClick={() => setaddCat(!addCat)}
                style={{ "padding-right": "10px" }}
              >
                <i class="material-icons">&#xE147;</i>
                <span style={{ "vertical-align": "top" }}>
                  Add New Category
                </span>
              </a>
              {addCat && (
                <form>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Category Name"
                      onChange={(e) => setCatName(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addCategory(user._id, isAuthenticated().token, catName);
                    }}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              )}
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
              <th>Category Id</th>
              <th>Category Name</th>
              <th>IsChecked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                            <td>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                    <label for="checkbox1"></label>
                                </span>
                            </td>
                            <td>1</td>
                            <td>Wedding Cakes</td>
                            <td>false</td>
                            <td>
                                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr> */}
            {props.categories.map((category) => {
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
                  <td>{category.id}</td>
                  <td>{category.category_name}</td>
                  <td>{`${category.isChecked}`}</td>
                  <td>
                    <a
                      href="#editEmployeeModal"
                      class="edit"
                      onClick={() => setOpen(true)}
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <Modal open={open} onClose={() => setOpen(false)}>
                      <h2>Update Category</h2>
                      <form>
                        <div class="form-group">
                          <label htmlFor="firstName">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setCatName(e.target.value)}
                            value={catName}
                          />
                        </div>

                        <button
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                          onClick={(e) => {
                            e.preventDefault();
                            updateCategory(
                              user._id,
                              category.id,
                              isAuthenticated().token,
                              catName
                            );
                            setOpen(false);
                          }}
                        >
                          Submit
                        </button>
                      </form>
                    </Modal>
                    <a
                      href="#deleteEmployeeModal"
                      class="delete"
                      onClick={(e) => {
                        // e.preventDefault();
                        removeCategory(
                          user._id,
                          isAuthenticated().token,
                          category.id
                        );
                      }}
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
  };
};
const mapDispatchtoProps = {
  addCategory,
  fetchCats,
  updateCategory,
  removeCategory,
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Categories);
