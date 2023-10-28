
import React from 'react'
import cl from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export function Profile(props) {
  return (
    <div >
      <ProfileInfo />
      <MyPosts state={props.state} dispatch={props.dispatch} />
    </div>
  )
}
