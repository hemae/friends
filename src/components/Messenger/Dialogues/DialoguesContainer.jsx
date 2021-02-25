import React from 'react';
import Dialogues from "./Dialogues";
import {connect} from "react-redux";


let mapPropsToState = (state) => {
    return {
        dialoguesData: state.messengerData.dialoguesData
    }
}

const DialoguesContainer = connect(mapPropsToState)(Dialogues);


export default DialoguesContainer;
