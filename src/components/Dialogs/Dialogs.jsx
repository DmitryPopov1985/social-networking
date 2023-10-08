import React from 'react'
import cl from './Dialogs.module.css'
import { Message } from './Message/Message'
import { DialogItem } from './DialogItem/DialogItem'

const dialogsData = [
  { id: '1', name: "Дмитрий" },
  { id: '2', name: "Петр" },
  { id: '3', name: "Василий" },

]
const messagesData = [
  { id: '1', message: "Hi" },
  { id: '2', message: "Yo" },
  { id: '3', message: "Yo" },

]
export function Dialogs() {
  return (
    <div className={cl.dialogsWrapper} >
      <div className={cl.dialogs} >
        {dialogsData.map(el => <DialogItem name={el.name} id={el.id} />)}
      </div>
      <div className={cl.messages} >
        {messagesData.map(el => <Message message={el.message} />)}
      </div>
    </div>
  )
}

