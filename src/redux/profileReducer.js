const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    postsData: [
        {id: "0", postText: "I'm gay!", likes: "5"},
        {id: "1", postText: "I'm stupid!", likes: "8"},
        {id: "2", postText: "I'm natural!", likes: "-1"}
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "3",
                postText: state.newPostText,
                likes: "0"
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            };
        };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});


export default profileReducer;
