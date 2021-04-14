const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const updateNewMessageBodyActionCreator = (message) => ( {
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: message
} );

export const sendMessageActionCreator = () => ( { type: SEND_MESSAGE } );

const dialogsPageReducer = (dialogsState, action) => {
    switch ( action.type ) {
        case SEND_MESSAGE: {
            dialogsState.messages.push({
                id: 4,
                message: dialogsState.newMessageBody,
                time: '',
                from: ''
            });
            dialogsState.newMessageBody = '';
            return dialogsState;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            dialogsState.newMessageBody = action.newBody;
            return dialogsState;
        }
        default: {
            return dialogsState;
        }
    }
};
export default dialogsPageReducer;