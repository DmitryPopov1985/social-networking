
import React from 'react'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'

export function Profile(props) {
 
  return (
    <div >
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
