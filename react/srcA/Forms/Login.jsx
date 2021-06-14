import React from "react";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import Form from "./Form";
import { connect } from "react-redux";
import { setUserName } from "../redux/actions";
import { Link } from "react-router-dom";
// import base from "../Firebase";

const mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => dispatch(setUserName(name)),
});

export default connect(
  null,
  mapDispatchToProps
)(
  class Login extends Form {
    setUserName = this.props.setUserName;
    state = { data: { email: "", password: "" }, errors: {} };

    schema = {
      email: Joi.string().email().required().label("email"),
      password: Joi.string().min(5).required().label("Password"),
    };

    doSubmit = async () => {
      const { email, password } = this.state.data;
      try {
        // await base.auth().signInWithEmailAndPassword(email, password);
        const { data } = await userService.login(this.state.data);
        const { jwt, name } = data;
        if (jwt) this.setUserName(name);
        localStorage.setItem("token", jwt);
        this.props.history.push("/weather");
      } catch (err) {
        alert("wrong password!");
        const user = { ...this.state.data };
        user.email = "";
        user.password = "";
        this.setState({ data: user });
      }
    };

    render() {
      return (
        <div className="login">
          <br />
          <form className="inner" onSubmit={this.handleSubmit}>
            <h3>Login</h3>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
            <Link
              className="ms-auto p-2 bd-highlight forgot-password text-right"
              to="/register"
            >
              {" "}
              Register
            </Link>
          </form>
          <br />
        </div>
      );
    }
  }
);
{
  /* <form className="inner">
            <h3>Log in</h3>

            <div className="form-group ">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
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

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign in
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form> */
}
