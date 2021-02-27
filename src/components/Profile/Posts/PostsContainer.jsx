import React from 'react';
import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


let mapPropsToState = (state) => {
    return {
        postsData: state.profileData.postsData,
        newPostText: state.profileData.newPostText
    };
};

let mapDispatchToState = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapPropsToState, mapDispatchToState)(Posts);


export default PostsContainer;
