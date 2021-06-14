import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUserName } from "../redux/actions";
// import base from "../Firebase";

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.user.name,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => dispatch(setUserName(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Navbar({ name, setUserName }) {
  const logOut = () => {
    localStorage.removeItem("token");
    setUserName(null);
    // base.auth().signOut();
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="navbar-nav d-flex flex-row mb-1">
        {!name && (
          <>
            {" "}
            <Link className="navbar-brand" to="/">
              Weather Forcast
            </Link>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>{" "}
          </>
        )}
        {name && (
          <>
            <div className="navbar-brand">{`Hello ${name}!  `}</div>
            <Link className="navbar-brand" to="/weather">
              Weather Forcast
            </Link>
            <NavLink className="nav-item nav-link" to="/history">
              Browse History
            </NavLink>
            <NavLink className="nav-item nav-link" onClick={logOut} to="/login">
              Log out
            </NavLink>
            <div className="navbar-brand m-1"></div>
          </>
        )}
      </div>
    </nav>
  );
});
