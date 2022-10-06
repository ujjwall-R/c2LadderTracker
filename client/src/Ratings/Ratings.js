import React from "react";
import "./Ratings.css";

const Ratings = ({ ratingChanger }) => {
  const ratingClickHandler = (e) => {
    ratingChanger(e.target.value);
  };

  const renderRatings = () => {
    let tempJSX = [];
    for (var i = 800; i <= 3500; i += 100) {
      tempJSX.push(
        <button
          type="button"
          className="btn btn-light"
          value={i}
          onClick={ratingClickHandler}
        >
          {i}
        </button>
      );
    }
    return tempJSX;
  };

  return (
    <div className="rating-box">
      <div class="btn-group" role="group" aria-label="Basic example">
        {renderRatings()}
      </div>
    </div>
  );
};

export default Ratings;
