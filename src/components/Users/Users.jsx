
import React from 'react'
import userPhoto from '../../assets/images/user.png'
import cl from './Users.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


export function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div><div>
      <div>
        {pages.map(p => <button key={p} onClick={(e) => { props.setCurrentPageHandler(p) }} className={p === props.currentPage && cl.selectedPage} >{p}</button>)}
      </div>
      {props.users.map(user => <div key={user.id} className={cl.userWrapper}>
        <div className={cl.userName} >{user.name}</div>
        <div>{user.status}</div>
        <NavLink to={'/profile/' + user.id} ><img className={cl.photoImage} src={user.photos.small !== null ? user.photos.small : userPhoto} alt="user icon" /></NavLink>

        {user.followed
          ? <button disabled={true} className={cl.userBtn} onClick={() => { 
            axios
              .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{withCredentials:true, headers:     {
                "API-KEY": "8f23f6f1-7487-4cd8-b331-f77e77d7cb67"
            }})
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.unfollow(user.id)
                }
              }) }} >Удалить из друзей</button>
          : <button disabled={true} className={cl.userBtn} onClick={() => {
            axios
              .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{withCredentials:true, headers:     {
                "API-KEY": "8f23f6f1-7487-4cd8-b331-f77e77d7cb67"
            }})
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.follow(user.id)
                }
              })
          }} >Добавить в друзья</button>
        }
      </div>)}
    </div></div>
  )
}


