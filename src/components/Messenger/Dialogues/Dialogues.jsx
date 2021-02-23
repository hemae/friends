import React from 'react';
import classes from './Dialogues.module.css';
import Dialog from "./Dialog/Dialog";

const Dialogues = (props) => {
    let dialoguesSet = props.dialoguesData
        .map(dialog => <Dialog profileName={dialog.profileName} profileImgLink={dialog.profileImgLink}/>);

    return (
        <div className={classes.dialogues}>
            {dialoguesSet}
        </div>
    );
}

export default Dialogues;
