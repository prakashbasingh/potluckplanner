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
  .potImage img {
    border: 1px solid red;
    box-shadow: 0 0 15px 20px #0275d8;
  }

  /* AddItemCard Component */
  .foodItemDiv {
    border: 1px solid black;
    margin: 5px;
    display: flex;
    align-items: center;
    width: 95%;
  }
  .foodItem {
    margin: 5px;
  }
  .itemDeleteBtn {
    width: 5%;
    text-align: right;
    display: flex;
    align-items: center;
  }
  .mainItemDiv {
    display: flex;
    /* flex-direction: row; */
  }
  .itemDeleteBtn button {
    color: red;
  }

  /* AddGuestCard Component */
  .mainGuestDiv {
    display: flex;
    height: 60px;
    border: 1px solid black;
    margin: 1%;
  }
  .guestDiv {
    margin: 5px;
    text-align: left;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .guestDeleteBtn {
    width: 15%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1%;
  }
  .guestDeleteBtn button .far {
    color: red;
    margin: 2px;
  }

  .guestDeleteBtn button .fas {
    color: green;
    margin: 2px;
  }
`;
