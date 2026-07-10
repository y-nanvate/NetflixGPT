
const VideoTitle =({title, overview})=>{
    return(
    <div className="pt-6 m-10">
       <h1 className="text-2xl text-bold">{title}</h1>
       <p className="w-1/4">{overview}</p>
       <div>
        <button> Play</button>
        <button>More Info</button>
       </div>
    </div>)
}
export default VideoTitle;