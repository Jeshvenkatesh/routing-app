import React from 'react';
import { Link } from 'react-router-dom';


const VideoData = (props)=>{
    // console.log(props)

    return(
        <div className="cardGrid">
        <div className="videocard">
        <Link to ={`/details/${props.id}`}>
        <img className="imgWrapper" src={props.videoThumb}></img>
        <h4>{props.videoTitle}</h4>
        </Link>
      </div>
        </div>
        
    )
}

export default VideoData;