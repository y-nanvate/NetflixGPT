import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground =({movieId})=>{
    const trailerId= useSelector((store)=> store.movies?.TrailerVideo);
  useMovieTrailer(movieId);

    return (
        <div className="w-screen"><iframe className="w-screen aspect-video" 
        src={"https://www.youtube.com/embed/"+trailerId?.key + "?autoplay=1&mute=1"}
       allow="accelerometer; autoplay; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe></div>
    )
}
export default VideoBackground;