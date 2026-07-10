import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"



const Browse =()=>{

   useNowPlayingMovies()

    return<>
    <Header/>
    <h1>Browse</h1>
    <MainContainer/>
    <SecondaryContainer/>
    </>
}

export default Browse