import React from "react";
import { Link, useHistory } from "react-router-dom";
import Styles from "./styledcomponets";

const Signup = (props) => {
  const {
    signup,
    onInputChange,
    submitSignupInfo,
    disabled,
    errors,
    userTakenErrorMessage,
  } = props;
  console.log(props, "0000000000000000");

  let history = useHistory();

  return (
    <Styles>
      <div
        className="container loginSignup signup bg-primary"
        style={{ marginTop: "30px" }}
      >
        <h2 className="heading">Sign Up</h2>
        <br />
        <p className="text-warning mb-2 ">{userTakenErrorMessage}</p>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Username:</label>
            <div className="col-sm-6">
              <input
                className="form-control"
                value={signup.username}
                onChange={onInputChange}
                name="username"
                type="text"
                placeholder="username"
              />
            </div>
            <p className="error col-sm-4">{errors.username}</p>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-6">
              <input
                className="form-control"
                value={signup.password}
                onChange={onInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="error col-sm-4">{errors.password}</p>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label ">Select Role:</label>
            <div className="col-sm-6">
              <select
                placeholder="Select your role"
                className="form-control dropdown-toggle"
                id="roleNameMenu"
                value={signup.role_name}
                onChange={onInputChange}
                name="role_name"
                type="text"
              >
                <option></option>
                <option>admin</option>
                <option>organizer</option>
                <option>guest</option>
              </select>
            </div>
            <p className="error col-sm-4">{errors.role_name}</p>
          </div>

          {/* {signup.role_name == "admin" ? (
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Admin Code</label>
              <div className="col-sm-6">
                <input
                  className="form-control"
                  type="text"
                  name="admin_code"
                  value={signup.admin_code}
                  onChange={onInputChange}
                  placeholder="Admin Code"
                />
              </div>
              <p className="error col-sm-4">{errors.admin_code}</p>
            </div>
          ) : (
            <div></div>
          )} */}

          <div className="bttn row">
            <div className="col-sm-p offset-sm-2">
              <button
                disabled={disabled}
                onClick={submitSignupInfo}
                type="submit"
                className="submit btn btn-outline-warning"
                // onClick={() => history.push("/login")}
              >
                Submit
              </button>
            </div>
            <div className="col-sm-p offset-sm-2">
              <a href="/login" className="btn btn-outline-warning">
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </Styles>
  );
};

export default Signup;

{
  /* <br />
<p className="error">{errors.lastName}</p>
<label>
  Last Name:
  <input
    value={signup.lastName}
    onChange={onInputChange}
    name="lastName"
    type="text"
    placeholder="Last Name"
  />
</label>
<br />
<p className="error">{errors.email}</p>
<label>
  Email:
  <input
    value={signup.email}
    onChange={onInputChange}
    name="email"
    type="email"
    placeholder="Email"
  />
</label> */
}

{
  /* {signup.role_name == "admin" ? (
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Admin Code</label>
              <div className="col-sm-6">
                <input
                  className="form-control"
                  type="text"
                  name="admin_code"
                  value={signup.admin_code}
                  onChange={onInputChange}
                  placeholder="Admin Code"
                />
              </div>
              <p className="error col-sm-4">{errors.admin_code}</p>
            </div>
          ) : (
            <div></div>
          )} */
}
