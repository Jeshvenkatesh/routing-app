import React from 'react';
import Axios from 'axios';

class DetailsPage extends React.Component{

    state={
        videoData:{}
    }
    componentDidMount(){
        const VideoIdNo = this.props.match.params.VideoId;
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist/' + VideoIdNo)
        .then((response)=>{
            console.log(response.data);
            this.setState({videoData:{...response.data}})
        })
        .catch(err=>{
           console.log(err);
        })
    }

    render(){
        return(

            <div>
            <br/>
            <br/>
            <br/>
            
         <h1>This is details page: {this.props.match.params.VideoId}</h1>
        <h1>{this.state.videoData.title}</h1>
        </div>
            
        )
    }
}

export default DetailsPage;