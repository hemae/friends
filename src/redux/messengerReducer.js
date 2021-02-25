const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let initialState = {
    dialoguesData: [
        {
            id: "0",
            profileName: "Andrew",
            profileImgLink: "https://lh3.googleusercontent.com/proxy/vQAoNHTnyYaSyvxhi02M1n7sKxHJYtEC3HgggqyLwxsKPVvtvFhZrsKh7bMFROUQrvABpYM-i18GdLGoHG7xr5ONUwkAZD4sclwKi7ZCPHe0w2LNyxwuUrzJB9KF9nw6LPjs-d5xWMopO1QcUA7pRIN0SivNNRWjqdkmyXd3QlUM1mHveNA"
        },
        {
            id: "1",
            profileName: "Sergey",
            profileImgLink: "https://vokrug-tv.ru/pic/person/5/e/5/c/5e5c47a109b5e9cc6451eabf3c877ad8.jpeg"
        },
        {
            id: "2",
            profileName: "Vladimir",
            profileImgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vladimir_asv2019-01_img05_Golden_Gate.jpg/220px-Vladimir_asv2019-01_img05_Golden_Gate.jpg"
        },
        {
            id: "3",
            profileName: "Ann",
            profileImgLink: "data:image/jpeg;base64,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"
        },
        {
            id: "4",
            profileName: "Anastasia",
            profileImgLink: "https://i.pinimg.com/originals/8e/c1/27/8ec127aad394bdb9bb9b0bbfeb146539.jpg"
        },
    ],
    chatData: {
        messagesData: [
            {id: "0", messageText: "Hello, guy!"},
            {id: "1", messageText: "I'm from US"},
            {id: "2", messageText: "Well!"},
            {id: "3", messageText: "Yeah, dude!)"}
        ],
        newMessageText: ""
    },
};

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: "4",
                messageText: state.chatData.newMessageText
            };
            return {
                ...state,
                chatData: {
                    ...state.chatData,
                    messagesData: [...state.chatData.messagesData, newMessage],
                    newMessageText: ""
                }
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                chatData: {
                    ...state.chatData,
                    newMessageText: action.newMessageText
                }
            };
        }
        default:
            return state;
    }
};


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default messengerReducer;
