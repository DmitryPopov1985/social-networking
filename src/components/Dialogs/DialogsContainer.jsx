
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { sendNewMessageAC} from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendNewMessageAC(newMessageBody))
    }
  }
}
export const DialogsContainer =  compose(withAuthRedirect,connect(mapStateToProps,mapDispatchToProps))(Dialogs) 
