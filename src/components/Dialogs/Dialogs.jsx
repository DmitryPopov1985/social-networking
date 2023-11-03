import React from 'react'
import cl from './Dialogs.module.css'
import { Message } from './Message/Message'
import { DialogItem } from './DialogItem/DialogItem'


export function Dialogs(props) {
  const updateMessageTextHandler = (e) => {
    let text = e.currentTarget.value
    props.updateMessageText(text)
  }
  const sendMessageHandler = () => {
    props.sendMessage()

  }
  return (
    <div className={cl.dialogsWrapper} >
      <div className={cl.dialogs} >
        {props.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)}
      </div>
      <div className={cl.messages} >
        {props.messagesData.map(el => <Message key={el.id} message={el.message} />)}
        <div><textarea onChange={updateMessageTextHandler} placeholder='Напишите сообщение' value={props.newMessageText}></textarea></div>
        <div><button onClick={sendMessageHandler} >Отправить</button></div>
      </div>
    </div>
  )
}

