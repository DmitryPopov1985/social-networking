
import { addPostAC } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'





const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newText: state.profilePage.newText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(addPostAC(newPost))
    },

  }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)