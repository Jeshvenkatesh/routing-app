import React from 'react';
import "./Topbar";
import classes from './Topbar.module.css';
import { Link } from 'react-router-dom';



const Topbar=(props)=>{
    return(

        <div className={classes.topbar}>
            <Link to ="/" className={classes.wrapper}>Home</Link>
            <Link to ="/about" className={classes.wrapper}>About</Link>
            <Link to="/contact" className={classes.wrapper}>Contact</Link>
           
        </div>
    );
}

export default Topbar;