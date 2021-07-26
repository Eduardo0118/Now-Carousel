import React, { useState, useEffect } from "react";
import axios from "axios";
import { Poster, PosterDetails, PosterInfo, PosterLive } from "./components";

//container
import CarouselContainer from "./container/carousel";

//hooks
import { useBreakpoints } from "./hooks/useBreakpoints";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  // let breakpoints = [
  //   { size: 1024, height: 200 },
  //   { size: 425, height: 116 },
  // ];

  // const getSize = useBreakpoints(breakpoints);

  useEffect(() => {
    handleMovies();
  }, []);

  const handleMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_KEY}`
    );

    setMovies(response.data.results);
  };

  return (
    <>
      <CarouselContainer
        rows={1}
        gap={8}
        totalItems={20}
        title="Lançamentos"
        path="#"
        height={202}
      >
        {movies.length > 0 &&
          movies.map((item, index) => (
            <PosterLive
              key={index}
              data={item}
              provider="Telecine"
              title="Programa ao vivo com título desnecessario"
              progress={40}
              progressColor="#FFCE00"
              schedule="20:00 - 23:00"
              link="https://google.com/"
            />
          ))}
      </CarouselContainer>
      <CarouselContainer
        rows={1}
        gap={8}
        totalItems={20}
        title="Lançamentos"
        path="#"
        height={202}
      >
        {movies.length > 0 &&
          movies.map((item, index) => (
            <PosterLive
              key={index}
              data={item}
              provider="Telecine"
              title="Programa ao vivo com título desnecessario"
              progress={40}
              progressColor="#46A9F0"
              schedule="20:00 - 23:00"
              link="https://facebook.com/"
            />
          ))}
      </CarouselContainer>
    </>
  );
}

export default App;
