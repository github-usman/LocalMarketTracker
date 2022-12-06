import React from "react";

function all_department() {
  return (
    <>
      <div class="dropdown ">
        <button
          className="btn btn-primary  dropdown-toggle"
          // type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="grid" src={require("./grid.png")} alt="cart_Image" />
          &nbsp;All Department
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <a className="dropdown-item" href="#">
          <strong>+</strong>Medicine
          </a>
          <a className="dropdown-item" href="#">
            Grocery
          </a>
          <a className="dropdown-item" href="#">
            Milk
          </a>
          <a className="dropdown-item" href="#">
            cosmetic products
          </a>
          <a className="dropdown-item" href="#">
            Digtal Devices
          </a>
          <a className="dropdown-item" href="#">
            Electronics
          </a>
        </ul>
      </div>
    </>
  );
}

export default all_department;
