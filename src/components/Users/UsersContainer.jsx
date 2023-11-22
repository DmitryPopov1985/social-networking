import React from 'react'
import { connect } from 'react-redux'
import { Users } from './Users'
import { follow, setCurrentPage, unfollow, toggleFollowingInProgress, getUsers } from '../../redux/users-reducer'
import { Preloader } from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  //   this.props.toggleIsFetching(true)
  //  usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
  //     .then(data => {
  //       this.props.toggleIsFetching(false)
  //       this.props.setUsers(data.items)
  //       this.props.setTotalUsersCount(data.totalCount)
  //     })
  }
  setCurrentPageHandler = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    // this.props.toggleIsFetching(true)
    // this.props.setCurrentPage(pageNumber)
    //   usersAPI.getUsers(pageNumber, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
    //   })
  }

  render() {
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
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followedAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowedAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }

//   }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers
})(UsersContainer)
