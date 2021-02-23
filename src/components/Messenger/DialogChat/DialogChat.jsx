import React from 'react';
import classes from './DialogChat.module.css';
import Message from "./Message/Message";


const DialogChat = (props) => {
    let getMessageText = React.createRef();

    let addMessage = () => {
        props.store.addMessage();
    };

    let onNewMessageText = () => {
        let text = getMessageText.current.value;
        props.store.updateNewMessageText(text);
    };

    let messagesSet = props.store.getState().messengerData.chatData.messagesData
        .map(messageData => <Message messageData={messageData}/>);

    return (
        <div className={classes.dialogChat}>
            {messagesSet}
            <textarea ref={getMessageText} onChange={onNewMessageText}
                      value={props.store.getState().messengerData.chatData.newMessageText}/>
            <button onClick={addMessage}>send</button>
        </div>
    );
}

export default DialogChat;
