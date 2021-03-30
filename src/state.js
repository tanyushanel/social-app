import React from 'react';

const state = {
    messagesPage: {
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

        ]
    },

    sideBar: {
        friends: [
            {},
            {},
            {}
        ]
    }
};

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 4,
        text: postMessage,
        likesCount: 0,
        dislikesCount: 0,
    };

    state.profilePage.posts.push(newPost);
}

export default state;