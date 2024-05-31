import React from "react";
import { useSelector } from "react-redux";


const Detail = () => {

    const movie = useSelector((state) => state.movie);

    console.log(movie)

    return(
        <div className="detail">
            {movie.name || movie.title}
        </div>
    )
};

export default Detail;