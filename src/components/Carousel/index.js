import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

import CarouselControls from "./components/CarouselControls";

const Carousel = ({
  children,
  rows = 1,
  totalItems = 20,
  gap = 10,
  gutter = 18,
}) => {
  const [data, setData] = useState({
    active: 1,
    translateX: 0,
    contentWidth: 0,
    itemWidth: 0,
    windowWidth: 0,
  });
  const listRef = useRef(null);

  const itemsPerPage = Math.floor(data.windowWidth / data.itemWidth);
  const restWidth = itemsPerPage * data.itemWidth + gutter;
  const isNext = data.translateX <= data.contentWidth - restWidth;
  const isPrev = data.translateX > 0;

  const handleNext = () => {
    if (isNext) {
      setData((prevData) => ({
        ...prevData,
        active: prevData.active + 1,
        translateX: prevData.itemWidth * prevData.active,
      }));
    }
  };

  const handlePrev = () => {
    if (isPrev) {
      setData((prevData) => ({
        ...prevData,
        active: prevData.active - 1,
        translateX: prevData.translateX - prevData.itemWidth,
      }));
    }
  };

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      contentWidth: listRef.current?.scrollWidth,
      itemWidth: listRef.current?.firstChild?.offsetWidth + gap,
    }));
  }, [data.windowWidth]);

  useEffect(() => {
    setTimeout(() => {
      setData((prevData) => ({
        ...prevData,
        contentWidth: listRef.current?.scrollWidth,
        itemWidth: listRef.current?.firstChild?.offsetWidth + gap,
      }));
    }, 500);
  }, [listRef.current]);

  useEffect(() => {
    const resizeWindow = () => {
      setData((prevData) => ({
        ...prevData,
        translateX: 0,
        active: 1,
        windowWidth: window.outerWidth,
        contentWidth: listRef.current?.scrollWidth,
        itemWidth: listRef.current?.firstChild?.offsetWidth + gap,
      }));
    };

    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const listStyle = {
    paddingLeft: gutter,
    paddinRight: gutter,
    display: "grid",
    gap: gap,
    gridAutoFlow: "column",
    gridTemplateColumns: `repeat(${totalItems}, ${listRef.current?.firstChild?.offsetWidth})`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    transform: `translateX(-${data.translateX}px)`,
  };

  return (
    <div className="carousel">
      {isPrev && <CarouselControls onClick={handlePrev} direction="left" />}
      <div className="carousel__content">
        <div ref={listRef} style={listStyle} className="carousel__list">
          {children}
        </div>
      </div>
      {isNext && <CarouselControls onClick={handleNext} direction="right" />}
    </div>
  );
};

export default Carousel;
