import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={classes.nav}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/messenger">Messenger</NavLink>
        </div>
    );
}

export default NavBar;
