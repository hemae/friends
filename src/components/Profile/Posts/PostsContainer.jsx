import React from 'react';
import Posts from "./Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const PostsContainer = (props) => {
    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    let state = props.store.getState();

    return (<Posts postsData={state.profileData.postsData} newPostText={state.profileData.newPostText} addPost={addPost}
                   updateNewPostText={onPostChange}/>);
}

export default PostsContainer;
