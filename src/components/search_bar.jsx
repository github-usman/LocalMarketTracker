import React from "react";

function search_bar(){

    return <div>

      <form>
      <div className="searchContent">
        <input className="searchBaar" placeholder="Search for your Products" type={"text/number"} />
        <input className="searchButton"type={"submit"} value="Search"/>
        </div>
      </form>
       
      </div>
    
}

export default search_bar;