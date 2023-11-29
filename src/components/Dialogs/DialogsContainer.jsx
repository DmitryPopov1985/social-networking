
import { sendNewMessageAC, updateNewMessageAC } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      dispatch(updateNewMessageAC(text))
    } ,
    sendMessage: () => {
      dispatch(sendNewMessageAC())
    }
  }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
