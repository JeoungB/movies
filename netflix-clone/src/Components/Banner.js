import axios from "../api/axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Banner = ({movieURL}) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieData();
  }, []);

  const movieData = async () => {
    const request = await axios.get(movieURL);

    let movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: detail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    const handleBannerMovie = () => {
      if(detail.videos.results.length === 0) {
        movieData();
      }

      if(detail.videos.results.length !== 0) {
        setMovie(detail);
      }
    };
    handleBannerMovie();
  };

  return (
    <div
      className="banner"
      style={{
        width: "100%"
      }}
    >
      <BannerContainer>
        {movie.length !== 0 && movie.videos.results.length !== 0 ? (
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1&mute=1&start=110&end=120&controls=0&loop=1&playlist=${movie.videos.results[0].key}&playsinline=1`}
            title="YouTube video player"
            allow="autoplay; fullscreen"
          ></Iframe>
        ) : null}
      </BannerContainer>
    </div>
  );
};

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 48.25%;
  font-size: 30px;
  z-index : -1;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Banner;
