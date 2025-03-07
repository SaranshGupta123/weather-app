import React from "react";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Search = (props) => {
  return (
    <div className="Search-box">
      <input type="search" value={props.searchData} className="Search" onChange={(e) => props.eventHandler(e.target.value)} placeholder="Type the city" onkey={props.onkey} />
      <button onClick={props.searchWeather} className="button">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default Search;
