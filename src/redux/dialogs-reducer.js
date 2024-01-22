
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

const initialState = {
  dialogsData: [
    { id: "1", name: "Дмитрий" },
    { id: "2", name: "Петр" },
    { id: "3", name: "Василий" },
  ],
  messagesData: [
    { id: "1", message: "Hi" },
    { id: "2", message: "Yo" },
    { id: "3", message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { id: "4", message: action.newMessageBody }],
      };

    default:
      return state;
  }
};

export const sendNewMessageAC = (newMessageBody) => ({ type: SEND_NEW_MESSAGE, newMessageBody });


export default dialogsReducer;
