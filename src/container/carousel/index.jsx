import React, { useState } from "react";
import "./styles.scss";

//components
import { Carousel } from "../../components";

//images
import Arrow from "../../assets/arrow.svg";

function CarouselContainer({
  children,
  rows,
  gap,
  totalItems,
  title,
  path,
  height,
}) {
  const [activeTitle, setActiveTitle] = useState("disable-show-more");
  const [zIndex, setZIndex] = useState();

  return (
    <div style={{ marginTop: 50 }}>
      <a
        href={path}
        onMouseEnter={() => setActiveTitle("active-show-more")}
        onMouseLeave={() => setActiveTitle("disable-show-more")}
        className="carousel-title-wrapper"
      >
        <h2>{title}</h2>
        <p className={`carousel-show-more ${activeTitle}`}>Ver mais</p>
        <img src={Arrow} alt="Seta para mais informações" />
      </a>
      <div
        onMouseEnter={() => setZIndex(999)}
        onMouseLeave={() => setZIndex(0)}
        style={{
          marginTop: 16,
          position: "relative",
          height: height,
          zIndex,
        }}
      >
        <Carousel rows={rows} gap={gap} totalItems={totalItems}>
          {children}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselContainer;
