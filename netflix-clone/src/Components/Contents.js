import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "../css/Contents.css";
import Modal from "./Modal"
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//https://www.inflearn.com/course/lecture?courseSlug=%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8&unitId=119889&category=questionDetail

const Contents = ({ title, id, movieURL, isLarge }) => {

  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    movieData();
  }, []);

  const movieData = async () => {
    const request = await axios.get(movieURL);
    setMovies(request.data.results);
  };

  const handleModal = async (id) => {

    console.log("detail", movies)

    const detailMoive = movies.find((movie) => {
      return movie.id === id;
    })

    console.log(detailMoive)
  }

  return (
    <section
      className="contents"
      style={{
        width: "100%",
        paddingTop: "50px",
        backgroundColor: "black",
        borderLeft : "1px solid red"
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
            onClick={() => handleModal(movie.id)}
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path
            }`}
            alt="영화 이미지"
          />
          </SwiperSlide>
        ))}
        </div>
        </Swiper>
        {
          modal ? (
            <Modal />
          ) : null
        }
    </section>
  );
};

export default Contents;