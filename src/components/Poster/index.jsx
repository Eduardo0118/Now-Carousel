import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Poster = ({ data, children, type, hover, ...props }) => {
  const [onHover, setOnHover] = React.useState(false);
  const [onHoverClass, setOnHoverClass] = React.useState("");
  const refCard = React.useRef(null);

  const styleImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
  };

  const getScalePosition = React.useCallback(() => {
    const position = refCard.current?.getBoundingClientRect().x;

    if (position < 20) {
      setOnHover(true);
      setOnHoverClass("translate-left");
    } else {
      setOnHover(true);
      setOnHoverClass("translate-center");
    }
  }, []);

  const classNameType = () => {
    switch (type) {
      case "portrait":
        return "poster-portrait";
      case "landscape":
        return "poster-landscape";
      case "live":
        return "poster-live";
      default:
        return type;
    }
  };

  const onMouseHover = () => {
    if (hover && onHover) {
      return onHoverClass;
    }

    return null;
  };

  return (
    <div
      ref={refCard}
      className={`container ${classNameType()} ${onMouseHover()}`}
      onMouseEnter={() => getScalePosition()}
      onMouseLeave={() => setOnHoverClass(false)}
    >
      <div className="content" {...props}>
        <div style={styleImage} className="banner" />
        {children}
      </div>
    </div>
  );
};

Poster.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["portrait", "landscape", "live"]).isRequired,
};

export default Poster;
