import React, { useState, useEffect } from "react";
import "./App.css";
// import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";

import * as yup from "yup";
// import axios from 'axios';
// import { v4 as uuid } from 'uuid';
import loginSchema from "./components/formSchemalogin";
import signupSchema from "./components/formSchemaSignup";

import Login from "./components/login";
import Signup from "./components/signup";
import CreatePotluckForm from "./components/CreatePotluckForm";
import PotluckPage from "./components/PotluckPage";
import UpdatePotluckForm from "./components/UpdatePotluckForm";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./utils/PrivateRoute";
import Potluck from "./components/Potluck";
import UpdateGuestForm from "./components/updateGuestForm";
import UserCreatePotluckForm from "./components/UserCreatePotluckForm";

import Home from "./landingPageComponent/home.js";
import HowItWorks from "./landingPageComponent/howItWorks.js";
import Stories from "./landingPageComponent/stories.js";
import AboutUs from "./landingPageComponent/aboutUs.js";
import SuccessStories from "./landingPageComponent/successStories.js";

const initialLoginValues = {
  username: "",
  password: "",
};

const initialSignupValues = {
  // firstName: "",
  // lastName: "",
  // email: "",
  username: "",
  password: "",
  role_name: "",
};

const initialLoginErrors = {
  email: "",
  password: "",
};

const initialSignupErrors = {
  // firstName: "",
  // lastName: "",
  // email: "",
  username: "",
  password: "",
};

// const initialMembers = [];

const initialDisabled = true;

function App(props) {
  // console.log(props, "kjhabgfsoiagdsoaqiguds")
  const [login, setLogin] = useState(initialLoginValues);
  console.log(login, " login Info {}{}{}{}{}{}|{}|");

  const [signup, setSignup] = useState(initialSignupValues);
  console.log(signup, " SIGN UP Info {}{}{}{}{}{}|{}|");

  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [signupErrors, setSignupErrors] = useState(initialSignupErrors);
  const [signupDisabled, setSignupDisabled] = useState(initialDisabled);
  const [loginDisabled, setLoginDisabled] = useState(initialDisabled);
  // const [members, setMembers] = useState(initialMembers);

  const [potluckInfo, setPotluckInfo] = useState([]);
  console.log(potluckInfo, "Do We Have Potluck INfo here .........??????");

  const [invalidCredentials, setInvalidCredentials] = useState([]);
  const [userTakenErrorMessage, setUserTakenErrorMessage] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        console.log(res, " APP res data potluckInfo.........");
        setPotluckInfo(res.data);
      })
      .catch((error) => {
        console.log(error, " APP error.........");
      });
  }, []);

  let history = useHistory();

  const submitSignupInfo = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", signup)
      .then((res) => {
        console.log(res, "postSignup Res ()()()()()()()()");
        // localStorage.setItem("token", res.data.authToken)
        window.location.assign("/login");
      })
      .catch((error) => {
        console.log(error.response, "postSignup error ()()()()()()()()");
        let userTakenMessage = error.response.data.message;
        setUserTakenErrorMessage(userTakenMessage);
      });
    setSignup(initialSignupValues);
    localStorage.setItem("username", "");
  };

  const submitLoginInfo = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", login)
      .then((res) => {
        console.log(res.data, "postLogin res ()()()()()()()");
        localStorage.setItem("token", res.data.token);
        window.location.assign("/potluckPage");
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("role_name", res.data.role_name);
        localStorage.setItem("user_id", res.data.user_id);
      })
      .catch((error) => {
        console.log(error.response, "postLogin Error ()()()()()()");
        let credentialError = error.response.data.message;
        setInvalidCredentials(credentialError);
      });
    setLogin(initialLoginValues);
  };

  const signupInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    yup
      .reach(signupSchema, name)
      .validate(value)
      .then((response) => {
        setSignupErrors({
          ...signupErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setSignupErrors({
          ...signupErrors,
          [name]: error.errors[0],
        });
      });

    setSignup({
      ...signup,
      [name]: value,
    });
  };

  const loginInputChange = (event) => {
    event.preventDefault();
    // setLogin(event.target.value);

    const { name, value } = event.target;

    yup
      .reach(loginSchema, name)
      .validate(value)
      .then((response) => {
        setLoginErrors({
          ...loginErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setLoginErrors({
          ...loginErrors,
          [name]: error.errors[0],
        });
      });

    setLogin({
      ...login,
      [name]: value,
    });
  };

  useEffect(() => {
    signupSchema.isValid(signup).then((valid) => {
      setSignupDisabled(!valid);
    });
  }, [signup]);

  useEffect(() => {
    loginSchema.isValid(login).then((valid) => {
      setLoginDisabled(!valid);
    });
  }, [login]);

  const loginPerson = localStorage.getItem("username");
  const roleName = localStorage.getItem("role_name");
  console.log(roleName, " RES DATA Role-Name after Login  XXXXXXXXXXXXXXXXXX");
  const userId = localStorage.getItem("user_id");

  function logOut() {
    localStorage.setItem("token", "");
    localStorage.setItem("username", "");
    localStorage.setItem("role_name", "");
    localStorage.setItem("user_id", "");
  }

  const potluckToken = localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="imageAndTitle">
            <img
              src="https://images.unsplash.com/photo-1571559932711-cb498a7a1ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="crockpot logo"
            />
            <h1> Potlucky Potluck Planner</h1>
          </div>
          {potluckToken ? (
            <div className="welcomeAndLogOut">
              <div className="welcome">
                <p>
                  ------- Welcome <span>{loginPerson}</span> -------
                </p>
                <p>
                  "You are <span>{roleName}</span>"
                </p>
              </div>
              <div className="logout btn btn-outline-dark btn-sm" type="button">
                <a onClick={() => logOut()} href="/">
                  Log Out
                </a>
              </div>
            </div>
          ) : (
            <div className="pleaseLogin">
              <p>"Please Login to Access Potluck page"</p>
            </div>
          )}
        </header>
        <nav className="nav-landing2">
          <a
            className="b1 aTag"
            href="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Home
          </a>

          <a
            className="b2 aTag"
            href="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </a>

          <a
            className="b3 aTag"
            href="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            Register
          </a>
          <a
            className="b4 aTag"
            href="/potluckPage"
            style={{ textDecoration: "none", color: "black" }}
          >
            Go To Potluck Page
          </a>

          <a
            className="b1 aTag"
            href="/aboutUs"
            style={{ textDecoration: "none", color: "black" }}
          >
            About Us
          </a>

          <a
            className="b2 aTag"
            href="/successStories"
            style={{ textDecoration: "none", color: "black" }}
          >
            Success Stories
          </a>

          <a
            className="b3 aTag"
            href="/stories"
            style={{ textDecoration: "none", color: "black" }}
          >
            Stories
          </a>

          <a
            className="b4 aTag"
            href="/howItWorks"
            style={{ textDecoration: "none", color: "black" }}
          >
            How It Works
          </a>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/howItWorks" component={HowItWorks} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/successStories" component={SuccessStories} />
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                login={login}
                onInputChange={loginInputChange}
                disabled={loginDisabled}
                errors={loginErrors}
                submitLoginInfo={submitLoginInfo}
                {...props}
                invalidCredentials={invalidCredentials}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <Signup
                signup={signup}
                onInputChange={signupInputChange}
                disabled={signupDisabled}
                errors={signupErrors}
                submitSignupInfo={submitSignupInfo}
                userTakenErrorMessage={userTakenErrorMessage}
              />
            )}
          />
          <Route exact path="/potluckForm" component={CreatePotluckForm} />
          <Route
            exact
            path="/userCreatePotluckForm"
            component={UserCreatePotluckForm}
          />
          {/* <Route
            exact
            // path="/UpdateUserPotluckForm"
            path="/potluckPage/UpdateUserPotluckForm/:id"
            component={UpdateUserPotluckForm}
          /> */}
          {/* <Route exact path="/itemForm" component={AddItemForm} />
          <Route exact path="/guestForm" component={AddGuestForm} /> */}
          {potluckToken ? (
            <PrivateRoute exact path="/potluckPage">
              <PotluckPage roleName={roleName} userId={userId} />
            </PrivateRoute>
          ) : (
            // history.push("/login")
            <div
              style={{
                background: "rgba(0, 0, 0, 0.7",
                width: "50%",
                margin: "auto",
                padding: "5%",
                border: "1px solid black",
                borderShadow: "",
              }}
            >
              <p style={{ color: "orangeRed", paddingBottom: "5%" }}>
                Please Login To Access Potluck Page
              </p>
              <a className="btn btn-outline-success" href="/login">
                Go To Login Page
              </a>
            </div>
          )}
          <Route
            exact
            path="/potluckPage/:id/guestUpdateForm/:id"
            render={() => <UpdateGuestForm />}
          />
          <Route
            exact
            path="/potluckPage/updateForm/:id"
            render={() => <UpdatePotluckForm />}
          />
          {/* <PrivateRoute exact path="/potluckPage/updateForm/:id">
            <UpdatePotluckForm setPotluckInfo={setPotluckInfo} />
          </PrivateRoute> */}
          <Route
            exact
            Path="/potluckPage/:id"
            render={() => (
              <Potluck
              // potluckInfo={potluckInfo}
              // setPotluckInfo={setPotluckInfo}
              />
            )}
          />
          {/* <PrivateRoute exact Path="/potluckPage/:id">
            <Potluck
              potluckInfo={potluckInfo}
              setPotluckInfo={setPotluckInfo}
            />{" "}
          </PrivateRoute> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{
  /* <PrivateRoute exact path="/potluckPage" 
render ={() => <PotluckPage {...props} potluckInfo={potluckInfo} setPotluckInfo={setPotluckInfo}/>}/>

<PrivateRoute exact path="/potluckPage/updateForm/:id" 
    render={props => <UpdatePotluckForm setPotluckInfo={setPotluckInfo}/>}/>

<PrivateRoute exact Path="/potluckPage/:id" 
    render={() =><Potluck {...props} potluckInfo={potluckInfo} setPotluckInfo={setPotluckInfo}/>}/> */
}
