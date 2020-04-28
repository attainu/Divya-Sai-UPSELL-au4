import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper";
const { user } = isAuthenticated();
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false,
      didRedirect: false,
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
    const { email, password } = this.state;
    this.setState({ error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        if (data.error) {
          this.setState({ error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            this.setState({ didRedirect: true });
          });
        }
      })
      .catch((err) => console.log(err));
  };
  performRedirect = () => {
    if (this.state.didRedirect) {
      console.log(user);
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else if (user && user.role === 0) {
        return <Redirect to="/user/dashboard" />;
      } else {
        return <p>Something went wrong</p>;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };
  loadingMessage = () => {
    return (
      this.state.loading && (
        <div
          className="alert alert-info"
          style={{
            marginTop: "10px",
          }}
        >
          <h2>Loading...</h2>
        </div>
      )
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
    return (
      <form>
        <h3>Already Regsitered?</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.handleChange("email")}
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChange("password")}
            value={this.state.password}
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <button onClick={this.onSubmit} className="btn btn-color btn-block">
          Submit
        </button>
        {this.loadingMessage()}
        {this.errorMessage()}
        {this.performRedirect()}
        <p className="forgot-password text-right">
          Forgot Password? <Link to="/forgotpassword">Click Here</Link>
        </p>
      </form>
    );
  }
}

export default Login;
