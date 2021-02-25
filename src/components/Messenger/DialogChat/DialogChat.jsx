import React from 'react';
import classes from './DialogChat.module.css';
import Message from "./Message/Message";


const DialogChat = (props) => {
    let getMessageText = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = getMessageText.current.value;
        props.onMessageChange(text);
    };

    let messagesSet = props.messagesData
        .map(messageData => <Message messageText={messageData.messageText}/>);

    return (
        <div className={classes.dialogChat}>
            {messagesSet}
            <textarea ref={getMessageText} onChange={onMessageChange}
                      value={props.newMessageText}
                      placeholder="type your message"/>
            <button onClick={onAddMessage}>send</button>
        </div>
    );
}

export default DialogChat;
