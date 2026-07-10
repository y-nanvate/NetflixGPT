import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies= useSelector( store => store.movies?.nowPlayingMovies)
  return (
    <div>
      <h2>Secondary Condainer</h2>
    </div>
  );
};
export default SecondaryContainer;
