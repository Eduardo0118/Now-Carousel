import React from "react";
import PropTypes from "prop-types";
import Loading from "./components/Loading";
import "./style.scss";

function PosterDetails({ isLoading, children }) {
  return (
    <div className="details">
      {isLoading && (
        <div className="loading">
          <Loading />
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
PosterDetails.propTypes = {
  isLoading: PropTypes.bool,
};

export default PosterDetails;
