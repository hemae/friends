import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messengerReducer";
import DialogChat from "./DialogChat";


const DialogChatContainer = (props) => {
    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    };

    let state = props.store.getState();

    return (<DialogChat messagesData={state.messengerData.chatData.messagesData}
                        newMessageText={state.messengerData.chatData.newMessageText} addMessage={addMessage}
                        onMessageChange={onMessageChange}/>);
}


export default DialogChatContainer;
