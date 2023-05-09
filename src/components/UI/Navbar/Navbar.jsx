import React from 'react';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className={classes.navbar}>
            <Link to={'/'} className={classes.title}>Weather app</Link>
            <Link to={'/about'} className={classes.about}>About</Link>
        </div>
    );
};

export default Navbar;