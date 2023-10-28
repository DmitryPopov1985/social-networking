import React from 'react'
import { sendNewMessageAC, updateNewMessageAC } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'


export function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage

  const updateMessageTextHandler = (text) => {

    props.store.dispatch(updateNewMessageAC(text))
  }
  const sendMessageHandler = () => {
    props.store.dispatch(sendNewMessageAC())

  }
  return (
    <Dialogs updateMessageText={updateMessageTextHandler} 
             sendMessage={sendMessageHandler} 
             newMessageText={state.newMessageText} 
             dialogsData={state.dialogsData} 
             messagesData={state.messagesData} />
  )
}

