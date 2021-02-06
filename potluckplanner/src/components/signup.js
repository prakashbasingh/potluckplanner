import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styledcomponets";

const Signup = (props) => {
  const { signup, onInputChange, submitSignupInfo, disabled, errors } = props;
  console.log(props, "0000000000000000");
  return (
    <Styles>
      <form className="signupForm">
        <h2>Sign Up Information</h2>
        <p className="error">{errors.username}</p>
        <label>
          Username:
          <input
            value={signup.username}
            onChange={onInputChange}
            name="username"
            type="text"
            placeholder="username"
          />
        </label>
        {/* <br />
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
        </label> */}
        <br />
        <p className="error">{errors.password}</p>
        <label>
          Password:
          <input
            value={signup.password}
            onChange={onInputChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <div className="bttn">
          <button
            disabled={disabled}
            onClick={submitSignupInfo}
            className="submit"
          >
            Submit
          </button>

          <Link to="/login">
            <button>Already have an account?</button>
          </Link>
        </div>
      </form>
    </Styles>
  );
};

export default Signup;
