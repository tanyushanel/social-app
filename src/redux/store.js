import profilePageReducer from "./reducers/profilePageReducer";
import dialogsPageReducer from "./reducers/dialogsPageReducer";
import sidebarReducer from "./reducers/sidebarReducer";

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
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    },

};

export default store;

window.store = store;
