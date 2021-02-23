import React from 'react';
import classes from './Messenger.module.css';
import Dialogues from "./Dialogues/Dialogues";
import DialogChat from "./DialogChat/DialogChat";

const Messenger = (props) => {
    return (
        <div className={classes.messenger}>
            <Dialogues dialoguesData={props.messengerData.dialoguesData}/>
            <DialogChat chatData={props.messengerData.chatData} dispatch={props.dispatch}/>
        </div>
    );
}

export default Messenger;
