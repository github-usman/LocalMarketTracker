import React from "react";

function footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="Footer">
      <div>
      
        <p className="pFooter">Copyright ⓒ {year} StockNearYou eCommerce</p>
        <p className="developer1">|</p>
        <p className="developer">Developed by -Usman ali Ansari</p>
      </div>
    </footer>
  );
}

export default footer;
