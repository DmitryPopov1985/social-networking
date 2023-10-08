import React from 'react'
import cl from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={cl.nav}>
    <div>
      <a href="#p">Профиль</a>
    </div>
    <div>
      <a href="#m">Сообщения</a>
    </div>
    <div>
      <a href="#n">Новости</a>
    </div>
    <div>
      <a href="#m">Музыка</a>
    </div>
    <div>
      <a href="#s">Настройки</a>
    </div>
  </nav>
  )
}
