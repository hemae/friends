import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let getPostText = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = getPostText.current.value;
        props.updateNewPostText(text);
    };

    let postsSet = props.postsData
        .map(post => <Post postText={post.postText} likes={post.likes}/>);

    return (
        <div className={classes.posts}>
            <textarea ref={getPostText} onChange={onPostChange}
                      value={props.newPostText}
                      placeholder="What's up?"/>
            <button onClick={addPost}>send</button>
            {postsSet}
        </div>
    );
}

export default Posts;
