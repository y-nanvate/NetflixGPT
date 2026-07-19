import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer =(movieId)=>{
const dispatch = useDispatch()
    const getMovieVideos = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    API_OPTIONS
  );
  const json = await data.json();
  console.log(json);
  const filterData= json.results.filter((video)=>video.type === "trailer") 
  const trailer = filterData.length ? filterData[0] : json.results[0];
  console.log(trailer)
  dispatch(addTrailerVideos(trailer))

};

useEffect(() => {
  getMovieVideos();
}, [movieId]); 
}
export default useMovieTrailer;