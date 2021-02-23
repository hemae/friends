import React from 'react';
import classes from './Messenger.module.css';
import Dialogues from "./Dialogues/Dialogues";
import DialogChat from "./DialogChat/DialogChat";

const Messenger = (props) => {
    return (
        <div className={classes.messenger}>
            <Dialogues store={props.store}/>
            <DialogChat store={props.store}/>
        </div>
    );
}

export default Messenger;
