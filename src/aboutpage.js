import React from 'react';
import classes from './aboutpage.module.css';




class AboutPage extends React.Component {

    render(){
        return(
            <div>
                <h1 className={classes.mainheading} >This is About Page...</h1>
            </div>

        );
    }
}

export default AboutPage;