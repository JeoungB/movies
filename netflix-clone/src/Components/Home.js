import React from "react";
import Banner from "./Banner";
import Contents from "./Contents";
import requests from "../api/requests";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        width: "calc(100% - 275px)",
        height: "300px",
        position: "relative",
        left: "275px",
      }}
    >
      <Banner movieURL={requests.nowPlaying}/>
      <Contents
        title="NETFLIX ORIGINALS"
        id="ORIGINALS"
        movieURL={requests.NetflixOriginals}
        isLarge
      />
    </div>
  );
};

export default Home;
