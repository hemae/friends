import React from 'react';
import classes from './Messenger.module.css';
import Dialogues from "./Dialogues/Dialogues";
import DialogChatContainer from "./DialogChat/DialogChatContainer";

const Messenger = (props) => {
    return (
        <div className={classes.messenger}>
            <Dialogues store={props.store}/>
            <DialogChatContainer store={props.store}/>
        </div>
    );
}

export default Messenger;
