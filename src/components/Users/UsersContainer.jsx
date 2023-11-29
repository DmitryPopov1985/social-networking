import React from 'react'
import { connect } from 'react-redux'
import { Users } from './Users'
import { follow, setCurrentPage, unfollow, toggleFollowingInProgress, getUsers } from '../../redux/users-reducer'
import { Preloader } from '../common/Preloader/Preloader'
import { Navigate } from 'react-router-dom'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  setCurrentPageHandler = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    if(!this.props.isAuth) {
      return <Navigate to={'/login'}/>
    }
    return <>{
      this.props.isFetching
        ? <Preloader />
        : <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setCurrentPageHandler={this.setCurrentPageHandler}
          followingInProgress={this.props.followingInProgress}
          
        />}
    </>
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers
})(UsersContainer)
