import React from 'react';
import classes from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <img src={props.profileImgLink}/>
            {props.profileName}
        </div>
    );
}

export default Dialog;
