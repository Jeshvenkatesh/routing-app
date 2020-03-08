import React from 'react';
import classes from './Watch.module.css';

class WatchApp extends React.Component {

    state={
        WatchFrames :[
            'https://i.imgur.com/PTgQlim.png',
            'https://i.imgur.com/iOeUBV7.png',
            'https://i.imgur.com/Mplj1YR.png',
            'https://i.imgur.com/Zygu7I3.png'
        ],
        selectedImg: 3
    }

    render(){


        return(
            <div className={classes.maindiv}>
                <div>
                    <img className={classes.wrapper} src="https://i.imgur.com/PTgQlim.png"/>
                    <img className={classes.wrapper} src={this.state.WatchFrames[this.state.selectedImg]}/>


                </div>
                <div>
                    <div className={classes.btn}></div>
                    <div className={classes.btn}></div>
                    <div className={classes.btn}></div>
                    <div className={classes.btn}></div>
                </div>
            </div>

        )
    }
}

export default WatchApp;