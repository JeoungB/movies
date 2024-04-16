import "../css/Banner.css";
import axios from "../api/axios";
import requests from "../api/requests";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieData();
  }, []);

  const movieData = async () => {
    const request = await axios.get(requests.nowPlaying);

    let movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: detail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(detail);
  };

  console.log(movie);

  return (
    <div className="banner">
      {
       movie.length !== 0 && movie.videos.results.length !== 0 ? (
        <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1&mute=1&start=110&end=120&controls=0&loop=1&playlist=${movie.videos.results[0].key}&playsinline=1`}
        title="YouTube video player"
        allow="autoplay; fullscreen"
      ></iframe>
        ) : (
          <div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="영화 이미지" />
          </div>
        )
      }
    </div>
  );
};

export default Banner;
