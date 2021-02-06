import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styledcomponets";

const Login = (props) => {
  const {
    login,
    onInputChange,
    // onSubmit,
    disabled,
    errors,
    submitLoginInfo,
  } = props;

  return (
    <Styles>
      <form onSubmit={submitLoginInfo} className="loginForm">
        <h2>Login Information</h2>
        <p className="error">{errors.email}</p>
        <div className="inputContainer">
          <label>
            Username:
            <input
              value={login.username}
              onChange={onInputChange}
              name="username"
              type="text"
              placeholder="username"
            />
          </label>
          <br />
          <p className="error">{errors.password}</p>
          <label>
            Password:
            <input
              value={login.password}
              onChange={onInputChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
        </div>

        <div className="bttn">
          {/* <Link to="/potluckPage">  */}
          <button disabled={disabled} className="submit">
            Submit
          </button>
          {/* </Link> */}
          <Link to="/register">
            <button>Need to Sign Up?</button>
          </Link>
        </div>
      </form>
    </Styles>
  );
};

export default Login;

// https://potluck-planner-signup.vercel.app
