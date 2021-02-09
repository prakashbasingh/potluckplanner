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
      <div
        className="container loginSignup login bg-success"
        style={{ marginTop: "30px" }}
      >
        <h2 className="heading">Login</h2>
        <br />
        <form onSubmit={submitLoginInfo}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" for="username">
              Username
            </label>
            <div className="col-sm-6">
              <input
                type="Text"
                className="form-control"
                id="username"
                value={login.username}
                onChange={onInputChange}
                name="username"
                placeholder="username"
              />
            </div>
            <p className="error col-sm-4">{errors.username}</p>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label" for="password">
              password
            </label>
            <div className="col-sm-6">
              <input
                className="form-control"
                id="password"
                value={login.password}
                onChange={onInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="error col-sm-4">{errors.password}</p>
          </div>
          <div className="row center">
            <div className="col-sm-p offset-sm-2">
              <button
                type="submit"
                className="btn btn-outline-warning"
                disabled={disabled}
              >
                Login Now
              </button>
            </div>
            <div className="col-sm-p offset-sm-2">
              <a href="/register" className="btn btn-outline-warning">
                Need to Sign Up?
              </a>
            </div>
          </div>
        </form>
      </div>
    </Styles>
  );
};

export default Login;

// https://potluck-planner-signup.vercel.app

{
  /* <Styles>
  <form onSubmit={submitLoginInfo} className="loginForm">
    <h2>Login Information</h2>
    <div className="inputContainer">
      <p className="error">{errors.username}</p>
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
      {/* <Link to="/potluckPage">  */
}
//       <button disabled={disabled} className="submit">
//         Submit
//       </button>
//       {/* </Link> */}
//       <Link to="/register">
//         <button>Need to Sign Up?</button>
//       </Link>
//     </div>
//   </form>
// </Styles>; */}
