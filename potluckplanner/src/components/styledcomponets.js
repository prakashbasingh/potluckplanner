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
  /* createPotluckCard */
  .potluckContainer {
    /* border: 1px solid gray; */
    width: 70%;
    padding: 0.5rem;
    margin: 1rem auto;
    border: 1px solid red;
    border-radius: 1rem;
    box-shadow: 5px 10px 28px red;
    background: #cbfece;
  }
  .potluckContainer:hover {
    background: red;
    box-shadow: 5px 10px 28px green;
    border: 1px solid green;
    cursor: pointer;
  }
  .potluckCardDiv {
    text-align: center;
    display: flex;
    justify-content: space-around;
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

  /* AddGuestForm */
  /* .GuestFormAndCardContainer {
    border: 1px solid black;
    margin: 1%;
  } */
  .addGuestFormContainer {
    display: flex;
    font-size: 18px;
  }
  .guestFormOnly {
    width: 80%;
  }
  .addGuestButton {
    /* float: right; */
    width: 20%;
  }

  /* Potluck.js ################################################*/

  .potluckSelected {
    margin: 2%;
    padding: 2%;
    border-bottom: 2px solid black;
  }

  /* AddGuestCard Component ############################################*/
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

  /* Fo Guest Modal (AddGuestCard & updateGuestForm) */
  .guestModal {
    /* display: none; */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background: rgba(0, 0, 0, 0.5);
  }
  .ModalContent {
    background: #caa005;
    margin: 35% auto;
    padding: 40px;
    width: 60%;
    box-shadow: 0 0 15px 20px #caa005;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
  }
  .updateGuestForm {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .updateGuestForm label {
    text-align: left;
  }
  .closeButton {
    float: right;
    width: 20%;
    color: #000;
    font-size: 30px;
    text-align: right;
  }

  .closeButton:hover,
  .closeButton:focus {
    color: red;
    cursor: pointer;
  }

  /* UserCard.js */
  .userCardContainer {
    /* border: 1px solid gray; */
    width: 70%;
    padding: 0.5rem;
    margin: 1rem auto;
    border: 1px solid red;
    border-radius: 1rem;
    box-shadow: 5px 10px 28px red;
    background: #cbfece;
  }
  /* .userCardDiv .userCardContainer p {
    color: red;
  } */
  /* .userCardContainer:hover .userCardDiv .userCardContainer p {
    color: white;
  } */
  .userCardContainer:hover {
    background: red;
    box-shadow: 5px 10px 28px green;
    border: 1px solid green;
    cursor: pointer;
    .userCardDiv .userCardContainer p {
      color: white;
    }
  }

  .userCardDiv {
    text-align: center;
    display: flex;
    justify-content: space-around;
  }

  /* For UserCreatePotluckForm.############################### */
  .userCreatePotluckForm {
    /* display: none; */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background: rgba(0, 0, 0, 0.5);
  }
  .formModelContent {
    background: #caa005;
    margin: 35% auto;
    padding: 40px;
    width: 60%;
    box-shadow: 0 0 15px 20px #caa005;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
  }
  .titleAndGoBackButton {
    width: 100%;
    margin: 5%auto;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
  }

  .titleAndGoBackButton h2 {
    font-size: 18px;
    margin: 5%auto;
  }
  .titleAndGoBackButton button {
    float: right;
  }

  .userPotluckForm {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .userPotluckForm label {
    text-align: left;
  }
  .submitButton button {
    color: black;
    margin: 5%auto;
  }
  .submitButton button:hover {
    color: #ffffff;
    background: red;
    cursor: pointer;
  }

  /* For organizer potluck Page */
  .organizerPotluckContainer {
  }
  .allOrganizerPotlucks {
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .organizerPotluckCard {
    padding: 1%;
    margin: 1%;
    border: 1px solid red;
    box-shadow: 5px 10px 28px red;
  }
  .organizerPotluckCard:hover {
    background: red;
    box-shadow: 5px 10px 28px green;
    border: 1px solid green;
    cursor: pointer;
  }

  /* GUest Potluck Page */
  .guestPotluckPage {
  }
  .guestPotluckPage > h4 {
    color: black;
    background: gold;
  }
  .allGuestPotlucks {
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .guestPotluckCard {
    color: black;
    padding: 1%;
    margin: 1%;
    border: 1px solid red;
    background: rgba(0, 255, 0, 0.6);
    box-shadow: 5px 10px 28px red;
    border-radius: 2rem;
  }
  .guestPotluckCard:hover {
    color: white;
    background: red;
    box-shadow: 5px 10px 28px green;
    border: 1px solid green;
    cursor: pointer;
  }
`;
