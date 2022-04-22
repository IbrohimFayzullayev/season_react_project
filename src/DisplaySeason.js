import React from "react";
// import ReactDOM from "react-dom";
import "./style.css";

const getMonth = function () {
  return new Date().getMonth();
};
const getSeason = function (lat, month) {
  if (lat > 0) {
    return month < 9 && month > 2 ? "Summer" : "Winter";
  } else {
    return month < 9 && month > 2 ? "Winter" : "Summer";
  }
};
const DisplaySeason = (props) => {
  let str = getSeason(props.lat, getMonth());
  if (str === "Winter") {
    return (
      <div>
        <i className="loading  huge snowflake icon icon_1 color_blue"></i>
        <h1 className="text">Burr, it's chilly!</h1>
        <i className="loading  huge snowflake icon icon_2 color_blue"></i>
      </div>
    );
  } else {
    return (
      <div>
        <i className="loading huge sun icon icon_1 color_yellow"></i>
        <h1 className="text">Let's hit the beach!</h1>
        <i className="loading huge sun icon icon_2 color_yellow"></i>
      </div>
    );
  }
};
export default DisplaySeason;
