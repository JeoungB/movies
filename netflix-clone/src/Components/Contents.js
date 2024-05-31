import React, { useEffect, useState } from "react";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../api/axios";
import "../css/Contents.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useDispatch } from "react-redux";
import { clickMovie } from "../store";
import { useNavigate } from "react-router-dom";

const Contents = ({ title, id, movieURL, isLarge }) => {

  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();
  let dispatch = useDispatch();


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
        backgroundColor: "black",
        paddingLeft : "50px"
      }}
    >
      <h1 style={{
        fontSize : "2.5vw",
        fontWeight : "900",
        color : "white",
        margin : "0px 0px 30px 20px"
      }}>{title}</h1>
        <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        breakpoints={{
            1378: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            998: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        navigation
        loop={true}
        pagination={{clickable : true}}
        >
        <div id={id} className="movie-imgs">
        {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
          <img
            className={`poster ${isLarge && "large-poster"}`}
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path
            }`}
            alt="영화 이미지"
            onClick={() => {
              dispatch(clickMovie(movie))
              navigate('/detail');
            }}
          />
          </SwiperSlide>
        ))}
        </div>
        </Swiper>

    </section>
  );
};

export default Contents;