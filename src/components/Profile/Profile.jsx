import React from 'react';
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.profileInfo}>
                <img
                    src="https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg"/>
                Profile info
            </div>
            <PostsContainer />
        </div>
    );
}

export default Profile;
