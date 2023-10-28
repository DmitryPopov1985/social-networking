import React from 'react'
import cl from './Dialogs.module.css'
import { Message } from './Message/Message'
import { DialogItem } from './DialogItem/DialogItem'
import { sendNewMessageAC, updateNewMessageAC } from '../../redux/dialogs-reducer'


export function Dialogs(props) {

  const updateMessageTextHandler = (e) => {
    
    props.dispatch(updateNewMessageAC(e.currentTarget.value))
  }
  const sendMessageHandler = () => {
    props.dispatch(sendNewMessageAC())

  }
  return (
    <div className={cl.dialogsWrapper} >
      <div className={cl.dialogs} >
        {props.state.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />)}
      </div>
      <div className={cl.messages} >
        {props.state.messagesData.map(el => <Message message={el.message} />)}
        <div><textarea onChange={updateMessageTextHandler} placeholder='Напишите сообщение' value={props.state.newMessageText}></textarea></div>
        <div><button onClick={sendMessageHandler} >Отправить</button></div>
      </div>
    </div>
  )
}

