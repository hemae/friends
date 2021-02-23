import React from 'react';
import classes from './Profile.module.css';
import Post from "./Post/Post";

const Profile = (props) => {
    let getPostText = React.createRef();

    let addPost = () => {
        props.store.addPost();
    };

    let onNewPostText = () => {
        let text = getPostText.current.value;
        props.store.updateNewPostText(text);
    };

    let postsSet = props.store.getState().profileData.postsData
        .map(post => <Post postText={post.postText} likes={post.likes}/>);

    return (
        <div className={classes.profile}>
            <div className={classes.profileInfo}>
                <img
                    src="https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg"/>
                Profile info
            </div>
            <div className={classes.posts}>
                <textarea ref={getPostText} onChange={onNewPostText}
                          value={props.store.getState().profileData.newPostText}/>
                <button onClick={addPost}>send</button>
                {postsSet}
            </div>
        </div>
    );
}

export default Profile;
