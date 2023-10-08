import React from 'react'
import cl from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

export function Navbar() {

  const setActive = () => {
    return ({isActive}) => (isActive ? `${cl.active} ${cl.link}` : cl.link)
  }
  return (
    <nav className={cl.nav}>
    <div className={cl.item} >
    <NavLink to="/profile" className = {setActive()} >Профиль</NavLink>
    </div>
    <div className={cl.item}>
      <NavLink to="/dialogs" className = {setActive()} >Сообщения</NavLink>
    </div>
    <div className={cl.item}>
      <NavLink to="/news" className = {setActive()} >Новости</NavLink>
    </div>
    <div className={cl.item}>
      <NavLink to="/music" className = {setActive()} >Музыка</NavLink>
    </div>
    <div className={cl.item}>
      <NavLink to="/settings" className = {setActive()} >Настройки</NavLink>
    </div>
  </nav>
  )
}
