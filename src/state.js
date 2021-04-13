const ADD_POST = "ADD_POST";
const UPDATE_NEW_TEXT_POST = "UPDATE_NEW_TEXT_POST";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
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
                { id: 0, message: 'Aaaaaaaaa', time: '', from: '' },
                { id: 1, message: 'Bbbbbbbbb', time: '', from: '' },
                { id: 2, message: 'Ccccccccc', time: '', from: '' },
                { id: 3, message: 'Ddddddddd', time: '', from: '' },
            ],
            newMessageBody: ''
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

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    dispatch(action) {
        if ( action.type === "ADD_POST" ) {
            let newPost = {
                id: 4,
                text: this._state.profilePage.newPostText,
                likesCount: 0,
                dislikesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';

        }
        else if ( action.type === "UPDATE_NEW_TEXT_POST" ) {
            this._state.profilePage.newPostText = action.newTxt;
            this._callSubscriber(this._state);
        }
        else if ( action.type === "UPDATE_NEW_MESSAGE_BODY" ) {
            this._state.dialogsPage.newMessageBody = action.newBody;
            this._callSubscriber(this._state);
        }
        else if ( action.type === "SEND_MESSAGE" ) {
            this._state.dialogsPage.messages.push({
                id: 4,
                message: this._state.dialogsPage.newMessageBody,
                time: '',
                from: ''
            });
            this._callSubscriber(this._state);
            this._state.dialogsPage.newMessageBody = '';
        }

    },
};

export default store;

export const addPostActionCreator = () => ( { type: ADD_POST } );

export const updateNewTextPostActionCreator = (txt) => ( {
    type: UPDATE_NEW_TEXT_POST,
    newTxt: txt
} );

export const updateNewMessageBodyActionCreator = (message) => ( {
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: message
} );

export const sendMessageActionCreator = () => ( { type: SEND_MESSAGE } );


window.store = store;
