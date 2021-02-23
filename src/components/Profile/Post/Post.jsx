import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div>
                <img src="https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg"/>
            </div>
            <div>
                {props.postText}
                likes: 
                {props.likes}
            </div>
        </div>
    );
}

export default Post;
