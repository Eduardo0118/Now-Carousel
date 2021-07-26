import { useState, useEffect } from "react";

export const useBreakpoints = (breakpoints) => {
  const [data, setData] = useState(null);
  const [width, setWidth] = useState(0);

  const setBreakpoints = () => {
    if (breakpoints) {
      breakpoints.forEach((item) => {
        if (width <= item.size) {
          setData(item);
        }
      });
    }
  };

  useEffect(() => {
    setBreakpoints();
  }, [width]);

  const updateWidth = () => {
    setWidth(window.outerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return data;
};
