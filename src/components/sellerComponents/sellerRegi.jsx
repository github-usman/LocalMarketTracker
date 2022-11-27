import React from "react";

const sellerRegi = () => {
  return (
    <>
      <h3 className="registrationHeading">Registeration form for Seller</h3>
      <br />

      <form className="registrationFrom">
        <ul>
          <tr>
            <td>
              <label className="registrationLabel">Shop Name :</label>
            </td>
            <td>
              <input className="registrationInput" type={"text"}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className="registrationLabel"> Owner First Name :</label>
            </td>
            <td>
              <input className="registrationInput" type={"text"}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className="registrationLabel"> Owner Last Name :</label>
            </td>
            <td>
              <input className="registrationInput" type={"text"}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className="registrationLabel"> Mobile No :</label>
            </td>
            <td>
              <input className="registrationInput" type={"tel"}></input>
            </td>
          </tr>

          <tr>
            <td>
              <label className="registrationLabel"> GSTIN No :</label>
            </td>
            <td>
              <input className="registrationInput" type={"text"}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className="registrationLabel"> Shop Type :</label>
            </td>
            <td>
              <input className="registrationInput" type={"text"}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className="registrationLabel"> Email Id :</label>
            </td>
            <td>
              <input className="registrationInput" type={"text"}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className="completeAddress"> Complete Address :</label>
            </td>
            <td>
              <textarea className="textArea" rows={"40px"}  column={"500px"}></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label className="registrationLabel">Enter New Passowrd :</label>
            </td>
            <td>
              <input className="registrationInput" type={"password"}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className="registrationLabel">
                Re-enter Your Passowrd :
              </label>
            </td>
            <td>
              <input className="registrationInput" type={"password"}></input>
            </td>
          </tr>

          <div className="submissionRegisterForm">
            <tr>
              <td>
                <input
                  className="sellerSubmitButton"
                  type={"button"}
                  value="Submit"
                ></input>
              </td>
            </tr>
          </div>
        </ul>
        <div className="termandCondition">
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
          <p>
            {" "}
            continuing, you agree to StockNearYou's Conditions of Use and
            Privacy Notice.{" "}
          </p>
        </div>
      </form>
    </>
  );
};

export default sellerRegi;
