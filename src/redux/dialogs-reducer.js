const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
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
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.body,
      };
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: "4", message: state.newMessageText }],
      };

    default:
      return state;
  }
};

export const sendNewMessageAC = () => ({ type: SEND_NEW_MESSAGE });
export const updateNewMessageAC = (body) => ({
  type: UPDATE_NEW_MESSAGE,
  body: body,
});

export default dialogsReducer;
