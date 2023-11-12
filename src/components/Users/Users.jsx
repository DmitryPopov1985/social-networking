
import axios from 'axios'
import React from 'react'
import userPhoto from '../../assets/images/user.png'
import cl from './Users.module.css'


export class Users extends React.Component {
  
  componentDidMount() {
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })

  }
  setCurrentPageHandler = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => this.props.setUsers(response.data.items))

  }
  
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return <div>
      <div>
        {pages.map(p =>  <button key={p} onClick={(e) => {this.setCurrentPageHandler(p)}} className={p === this.props.currentPage && cl.selectedPage} >{p}</button> )}
      </div>
    {this.props.users.map(user => <div key={user.id} className={cl.userWrapper}>
      <div className={ cl.userName } >{user.name}</div>
      <div>{ user.status }</div>
      <img className={cl.photoImage } src={user.photos.small !== null ? user.photos.small : userPhoto  } alt="user icon" />
      {user.followed
        ? <button className={ cl.userBtn  } onClick={() => { this.props.unfollow(user.id) }} >Удалить из друзей</button>
        : <button className={ cl.userBtn  } onClick={() => { this.props.follow(user.id) }} >Добавить в друзья</button>
      }
    </div>)}
  </div>
  }
   
  
}
