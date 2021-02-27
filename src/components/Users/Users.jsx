import React from 'react';
import classes from './Users.module.css';
import User from "./User/User";
import axios from "axios";


const Users = (props) => {
    if (props.usersData.usersData.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
    }

    let usersSet = props.usersData.usersData
        .map(user => <User userData={user} follow={props.follow} unfollow={props.unfollow}/>);

    return (
        <div className={classes.users}>
            {usersSet}
        </div>
    );
}


export default Users;
