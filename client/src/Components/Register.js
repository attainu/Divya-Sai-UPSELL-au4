import React, { Component } from "react";
import { signup } from "../auth/helper";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      error: "",
      success: false,
    };
  }
  handleChange = (name) => (event) => {
    this.setState({
      ...this.state,
      error: false,
      [name]: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const { name, lastname, email, password } = this.state;
    signup({ name, lastname, email, password })
      .then((data) => {
        if (data.error) {
          this.setState({ ...this.state, error: data.error, success: false });
        } else {
          this.setState({
            ...this.state,
            name: "",
            lastname: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log("error in signup"));
  };
  successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: this.state.success ? "" : "none", marginTop: "10px" }}
      >
        New account was created successfully. Please Login now.
      </div>
    );
  };
  errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: this.state.error ? "" : "none", marginTop: "10px" }}
      >
        {this.state.error}
      </div>
    );
  };
  render() {
    const { name, lastname, email, password } = this.state;
    return (
      <form>
        <h3>Create an Account</h3>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={this.handleChange("name")}
            value={name}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            onChange={this.handleChange("lastname")}
            className="form-control"
            placeholder="Last name"
            value={lastname}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.handleChange("email")}
            value={email}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChange("password")}
            value={password}
          />
        </div>

        <button onClick={this.onSubmit} className="btn btn-color btn-block">
          Create Account
        </button>
        {this.successMessage()}
        {this.errorMessage()}
      </form>
    );
  }
}

export default Register;
