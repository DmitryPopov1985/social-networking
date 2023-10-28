const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

const dialogsReducer = (state, action) => {
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
