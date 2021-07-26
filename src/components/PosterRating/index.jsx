import React from "react";
import "./styles.scss";

import { ageRating } from "../../utils/ratings";

const PosterRating = ({ type, rating, age }) => {
  return (
    <div className="info-rating">
      <ul>
        {rating &&
          rating.map((item, key) => (
            <li
              className={type === "header" ? "info-age-header" : null}
              key={key}
            >
              {item}
            </li>
          ))}
        {age && (
          <li>
            <img
              className="info-age-rating"
              src={ageRating(age)}
              alt="Idade mínima para assistir"
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default PosterRating;
