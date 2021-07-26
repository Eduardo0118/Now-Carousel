import React from "react";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify/icons-mdi/chevron-left";
import chevronRight from "@iconify/icons-mdi/chevron-right";
import "./style.scss";

export default function CarouselControls({
  onNext,
  onPrev,
  direction,
  isEdge,
  ...props
}) {
  const [isHover, setIsHover] = React.useState({
    left: false,
    right: false,
  });

  const handleHover = (key, value) => {
    setIsHover((prevState) => ({ ...prevState, [key]: value }));
  };
  return (
    <React.Fragment>
      <div
        onClick={direction === "left" ? onPrev : onNext}
        onMouseEnter={() =>
          direction === "left"
            ? handleHover("left", true)
            : handleHover("right", true)
        }
        onMouseLeave={() =>
          direction === "left"
            ? handleHover("left", false)
            : handleHover("right", false)
        }
        className={
          direction === "left"
            ? `carousel__left ${isHover.left ? "carousel__left__active" : ""}`
            : `carousel__right ${
                isHover.right ? "carousel__right__active" : ""
              }`
        }
        {...props}
      >
        <Icon
          style={{ fontSize: 50, color: "#fff" }}
          icon={direction === "left" ? chevronLeft : chevronRight}
        />
      </div>
    </React.Fragment>
  );
}
