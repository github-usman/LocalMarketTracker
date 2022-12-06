import React from "react";
import { Link } from "react-router-dom";

function sellerSign(){
    return <div>

     <h3 className="registrationHeading">Sign In for Seller</h3>
      <br />

      <form >
     
        <ul>
        <div className="formUpperPart">
          <tr>
            <td>
              <label className="registrationLabel">Login Id :</label>
            </td>
            <td>
              <input className="registrationInput" type={"text"}></input>
            </td>
          </tr>
          <tr>
            <td>
              <label className="registrationLabel"> Passowrd :</label>
            </td>
            <td>
              <input className="registrationInput" type={"password"}></input>
            </td>
          </tr>
       </div>
        <div className="submissionForm">
          <tr>
            <td>
            <Link className="sellerRegisterButton" type={"button"} value="Register" to="/sellerRegi">
            Register
            </Link>
             
            </td>
            <td>
             <Link className="sellerSubmitButton" type={"button"} value="Submit" to="#" > submit</Link>
            </td>
          </tr>
          </div>
        </ul>
      </form>

      <p className="termFormLogin"> continuing, you agree to StockNearYou's Conditions of Use and Privacy Notice. </p>
    </div>
}

export default sellerSign;