import React from 'react';
import classes from './User.module.css';

const User = (props) => {
    return (
        <div className={classes.user}>
            <span>
                <div>
                    <img src={props.userData.userPhoto}/>
                </div>
                <div>
                    {props.userData.followed
                        ? <button onClick={() => {props.unfollow(props.userData.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(props.userData.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <div>
                    {props.userData.firstName}
                    {props.userData.status}
                </div>
                <div>
                    {props.userData.country}
                    {props.userData.city}
                </div>
            </span>
        </div>
    );
}

export default User;
