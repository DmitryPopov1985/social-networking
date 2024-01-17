
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { sendNewMessageAC, updateNewMessageAC } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
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
export const DialogsContainer =  compose(withAuthRedirect,connect(mapStateToProps,mapDispatchToProps))(Dialogs) 
