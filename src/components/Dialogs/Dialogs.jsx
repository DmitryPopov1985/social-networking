import React from 'react'
import cl from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

export function Dialogs() {
  
  return (
    <div className={cl.dialogsWrapper} >
      <div className={cl.dialogs} >
        <DialogItem name='Дмитрий' id='1' />
        <DialogItem name='Петр' id='2' />
        <DialogItem name='Василий' id='3' />
        
      </div>
      <div className={cl.messages} >
        <Message message='hi' />
        <Message message='yo' />
        <Message message='yo' />
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

