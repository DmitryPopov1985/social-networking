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
        ? <NavLink to={'/auth/'} >Registration</NavLink>
        : <NavLink to={'/auth/'} >Login</NavLink>
        }
      </div>
      </header>
  )
}
