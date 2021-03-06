import React from 'react';
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC} from "../../redux/usersReducer";
import Users from "./Users";


let mapPropsToState = (state) => {
    return {
        usersData: state.usersData
    };
};

let mapDispatchToState = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapPropsToState, mapDispatchToState)(Users);


export default UsersContainer;
