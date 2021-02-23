import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/messenger">Messenger</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
