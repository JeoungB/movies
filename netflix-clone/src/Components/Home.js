import React from "react";
import Banner from "./Banner";
import Contents from "./Contents";
import requests from "../api/requests";
import Nav from "./Nav";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        width: "calc(100% - 235px)",
        height: "300px",
        position: "relative",
        left: "235px",
      }}
    >
      <Nav />
      <Banner movieURL={requests.nowPlaying} />
      <Contents
        title="NETFLIX ORIGINALS"
        id="ORIGINALS"
        movieURL={requests.NetflixOriginals}
        isLarge
      />
      <Contents
        title="TRENDING"
        id="Trending"
        movieURL={requests.Trending}
      />
      <Contents
        title="ACTION"
        id="Action"
        movieURL={requests.ActionMovies}
      />
      <Contents
        title="COMEDY"
        id="Comedy"
        movieURL={requests.ComedyMovies}
      />
            <Contents
        title="ROMANCE"
        id="Romance"
        movieURL={requests.RomanceMovies}
      />
            <Contents
        title="HORROR"
        id="Horror"
        movieURL={requests.HorrorMovies}
      />
    </div>
  );
};

export default Home;
