import React from 'react';
import Axios from 'axios';
import VideoData from './VideoCard';
import classes from './HomePage.module.css';
import './VideoCard.css';



class Homepage extends React.Component {

    state={
        videoList:[],
        showLoader:true
      }

  onLoadVideoList=()=>{

    return(
      Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
      .then((response)=>{
          this.setState({
                            videoList:[...response.data],
                             showLoader:false
  
                             })
      })
      .catch((err)=>{
    
      })
    )
  }
  
    render(){

        const videoCards= this.state.videoList.map((item,pos)=>{

            return(
              <VideoData videoThumb={item.thumbnail} id={item.id} videoTitle={item.title} key={pos}/>
            )
                 
          })

        return( 
            <div >
              <br/>
              <br/>
              <br/>
              <br/>
            <h1>Home Page</h1>
            <button onClick={this.onLoadVideoList}>VideoList</button>

            
            {/* {videoCards} */}
            <div className={classes.maindiv}>
            {this.state.showLoader ? <h1>Loading...</h1> : videoCards }

            </div>
      
          </div>

        );
    }
}

export default Homepage;