import React from "react";

function header() {
  return (
    <header>
      <div className="wrapper">
        {" "}
        <img
          className="cartImage"
          src={"../cart_logo.png"}
          alt="imgforLogo"
        />{" "}
        <h1 className="stockNearYou">StockNearYou</h1>{" "}
        <p className="cntus">Contact Us</p>
      </div>
    </header>
  );
}

export default header;
