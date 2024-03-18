import React from 'react'
import cl from './Header.module.css'
import { NavLink } from 'react-router-dom'

export function Header(props) {
  return (
    <header className={cl.header}>
      header
      <div className={ cl.loginWrapper } >
        {
        props.isAuth 
        ? <NavLink to={'/auth/'} >{props.login} <button onClick={props.logout} >Log out</button> </NavLink>
        : <NavLink to={'/auth/'} >Login</NavLink>
        }
      </div>
      </header>
  )
}
