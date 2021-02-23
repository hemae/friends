let store = {
    _state: {
        profileData: {
            postsData: [
                {id: "0", postText: "I'm gay!", likes: "5"},
                {id: "1", postText: "I'm stupid!", likes: "8"},
                {id: "2", postText: "I'm natural!", likes: "-1"}
            ],
            newPostText: "type new post..."
        },
        messengerData: {},
    },
    getState() {
        return this._state;
    },
    addPost(postText) {
        this._state.profileData.postsData.push({id: "3", postText: postText, likes: "0"});
        this._state.profileData.newPostText = "";
        this._rerenderEntireTree();
    },
    updateNewPostText(newPostText) {
        this._state.profileData.newPostText = newPostText;
        this._rerenderEntireTree();
    },
    _rerenderEntireTree() {
        console.log("blabla");
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}


export default store;
