
import { connect } from 'react-redux'
import { Users } from './Users'
import { followedAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowedAC } from '../../redux/users-reducer'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followedAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowedAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
