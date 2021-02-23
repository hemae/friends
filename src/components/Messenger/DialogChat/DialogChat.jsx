import React from 'react';
import classes from './DialogChat.module.css';
import Message from "./Message/Message";


const DialogChat = (props) => {
    let getMessageText = React.createRef();

    let addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"});
    };

    let onNewMessageText = () => {
        let text = getMessageText.current.value;
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: text});
    };

    let messagesSet = props.chatData.messagesData
        .map(messageData => <Message messageData={messageData}/>);

    return (
        <div className={classes.dialogChat}>
            {messagesSet}
            <textarea ref={getMessageText} onChange={onNewMessageText}
                      value={props.chatData.newMessageText}/>
            <button onClick={addMessage}>send</button>
        </div>
    );
}

export default DialogChat;
