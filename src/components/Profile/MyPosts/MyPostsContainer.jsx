
import { addPostAC, updateNewPostAC } from '../../../redux/profile-reducer'
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
    addPost: () => {
      dispatch(addPostAC())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostAC(text))
    }

  }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)