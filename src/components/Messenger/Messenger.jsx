import React from 'react';
import classes from './Messenger.module.css';
import DialogChatContainer from "./DialogChat/DialogChatContainer";
import DialoguesContainer from "./Dialogues/DialoguesContainer";

const Messenger = (props) => {
    return (
        <div className={classes.messenger}>
            <DialoguesContainer />
            <DialogChatContainer />
        </div>
    );
}

export default Messenger;
