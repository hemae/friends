import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messengerReducer";
import DialogChat from "./DialogChat";
import {connect} from "react-redux";


let mapPropsToState = (state) => {
    return {
        messagesData: state.messengerData.chatData.messagesData,
        newMessageText: state.messengerData.chatData.newMessageText
    }
}

let mapDispatchToState = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const DialogChatContainer = connect(mapPropsToState, mapDispatchToState)(DialogChat);


export default DialogChatContainer;
