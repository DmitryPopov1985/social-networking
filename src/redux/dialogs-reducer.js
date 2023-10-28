const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

const initialState = {
  dialogsData: [
      { id: '1', name: "Дмитрий" },
      { id: '2', name: "Петр" },
      { id: '3', name: "Василий" },
    ],
  messagesData: [
      { id: '1', message: "Hi" },
      { id: '2', message: "Yo" },
      { id: '3', message: "Yo" },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.body;
      return state;
    case SEND_NEW_MESSAGE:
      const body = state.newMessageText;
      state.newMessageText = "";
      state.messagesData.push({ id: "4", message: body });
      return state;

    default:
      return state;
  }
};


export const sendNewMessageAC = () => ({type: SEND_NEW_MESSAGE})
export const updateNewMessageAC = (text) => ({type: UPDATE_NEW_MESSAGE, body: text})

export default dialogsReducer;
