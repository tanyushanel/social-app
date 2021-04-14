const ADD_POST = "ADD_POST";
const UPDATE_NEW_TEXT_POST = "UPDATE_NEW_TEXT_POST";

export const addPostActionCreator = () => ( { type: ADD_POST } );

export const updateNewTextPostActionCreator = (txt) => ( {
    type: UPDATE_NEW_TEXT_POST,
    newTxt: txt
} );

const profilePageReducer = (profileState, action) => {
    switch ( action.type ) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                text: profileState.newPostText,
                likesCount: 0,
                dislikesCount: 0,
            };
            profileState.posts.push(newPost);
            profileState.newPostText = '';
            return profileState;
        }
        case UPDATE_NEW_TEXT_POST: {
            profileState.newPostText = action.newTxt;
            return profileState;
        }
        default: {
            return profileState;
        }
    }
}
export default profilePageReducer;