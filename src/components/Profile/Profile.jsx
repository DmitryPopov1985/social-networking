
import React from 'react'
import cl from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'

export function Profile() {
  return (
    <div >
      <div>Большая картинка</div>
      <div>аватар + описание</div>
      <MyPosts/>
    </div>
  )
}

