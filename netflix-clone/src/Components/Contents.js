import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "../css/Contents.css";

const Contents = ({ title, id, movieURL, isLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieData();
  }, []);

  const movieData = async () => {
    const request = await axios.get(movieURL);
    setMovies(request.data.results);
  };

  return (
    <section
      className="contents"
      style={{
        width: "100%",
        paddingTop: "50px",
        position: "absolute",
        overflow : "hidden",
        backgroundColor: "red",
      }}
    >
      <h1>{title}</h1>
      <div className="slider">
        <div className="slider-arrow-left">
          <span>{"<"}</span>
        </div>

        {movies.map((movie) => (
            <div className="movie-imgs" key={movie.id}> 
          <img
            className={`poster ${isLarge && "large-poster"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt="영화 이미지"
          />
          </div>
        ))}

        <div className="slider-arrow-right">
          <span>{">"}</span>
        </div>
      </div>
    </section>
  );
};

export default Contents;
