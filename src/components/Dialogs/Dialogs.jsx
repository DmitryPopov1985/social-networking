import React from 'react'
import cl from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const dialogsData = [
  {id: '1', name: "Дмитрий"},
  {id: '2', name: "Петр"},
  {id: '3', name: "Василий"},
  
]
const messagesData = [
  {id: '1', message: "Hi"},
  {id: '2', message: "Yo"},
  {id: '3', message: "Yo"},
  
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
export function Message({message, ...props}) {
  return <div className={cl.message}>{message}</div>
}

export function DialogItem({name, id, ...props}) {
  const setActive = () => {
    return ({isActive}) => (isActive ? `${cl.active} ${cl.link}` : cl.link)
  }
  const path = '/dialogs/' + id
  return <div className={`${cl.dialog}`}>
    <NavLink to={path} className={setActive()}>{name}</NavLink>
  </div>
}

