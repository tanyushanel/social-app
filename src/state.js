const store = {

    _state: {
        dialogsPage: {
            dialogs: [
                { id: 0, name: 'Tanya', posts: [] },
                { id: 1, name: 'Anya', posts: [] },
                { id: 2, name: 'Vanya', posts: [] },
                { id: 3, name: 'Banya', posts: [] },
            ],
            messages: [
                { id: 0, text: 'Aaaaaaaaa', time: '', from: '' },
                { id: 1, text: 'Bbbbbbbbb', time: '', from: '' },
                { id: 2, text: 'Ccccccccc', time: '', from: '' },
                { id: 3, text: 'Ddddddddd', time: '', from: '' },

            ],
        },
        profilePage: {
            posts: [
                {
                    id: 0,
                    text: 'I want to break free I want to break free I want to break free I want to break free I want to break free I want to break freeI want to break free I want to break free I want to break freeI want to break free I want to break free I want to break free',
                    likesCount: 6,
                    dislikesCount: 2
                },
                { id: 1, text: 'I want to sleep free', likesCount: 34, dislikesCount: 1 },
                { id: 2, text: 'I want to love free', likesCount: 13, dislikesCount: 1 },
                { id: 3, text: 'I want to break free', likesCount: 3, dislikesCount: 0 },

            ],
            newPostText: ''
        },
        sideBar: {
            friends: [
                {},
                {},
                {}
            ]
        }
    },

    setState(newState) {
        this._state = newState;
    },

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 4,
            text: this._state.profilePage.newPostText,
            likesCount: 0,
            dislikesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        rerenderTree(this._state);
        this._state.profilePage.newPostText = '';
    },

    updateNewPostText(newTxt) {
        this._state.profilePage.newPostText = newTxt;
        rerenderTree(this._state);
    },

    subscribe(observer) {
        rerenderTree = observer;
    },


};

let rerenderTree = () => {
    console.log('State changed');
};



