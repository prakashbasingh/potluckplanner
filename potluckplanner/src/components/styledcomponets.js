import styled from "styled-components";

export default styled.div`
  .loginSignup {
    padding-bottom: 5%;
    /* background: rgba(357, 357, 357, 0.5); */
    /* box-shadow: 0 0 15px 20px #2c9620; */
  }
  .login {
    border: 1px solid #5cb85c;
    box-shadow: 0 0 15px 20px #5cb85c;
  }
  .signup {
    border: 2px solid #0275d8;
    box-shadow: 0 0 15px 20px #0275d8;
  }

  .heading {
    color: black;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    padding: 4%;
    text-shadow: 2px 2px 2px #888;
    border-bottom: 1px solid black;
  }
  label {
    font-size: 1.2rem;
    color: black;
  }

  .error {
    color: red;
    font-weight: bold;
    text-align: center;
  }
  div button a {
    text-decoration: none;
  }
`;
