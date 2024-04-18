import React from "react";
import Banner from "./Banner";
import Contents from "./Contents";
import requests from "../api/requests";

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
      <Banner movieURL={requests.nowPlaying} />
      <Contents
        title="NETFLIX ORIGINALS"
        id="ORIGINALS"
        movieURL={requests.NetflixOriginals}
        isLarge
      />
      <Contents
        title="Trending Now"
        id="Trending"
        movieURL={requests.Trending}
      />
    </div>
  );
};

export default Home;
