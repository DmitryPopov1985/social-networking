import React from 'react'
import { addPostAC, updateNewPostAC } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'



export function MyPostsContainer(props) {

  let state = props.store.getState().profilePage
  const addPostHandler = () => {
    
      props.store.dispatch(addPostAC())
  }
  const updatePostHandler = (text) => {
    props.store.dispatch(updateNewPostAC(text))
  }
  return (
    <MyPosts postsData={state.postsData } newText={state.newText} addPost={addPostHandler} updateNewPostText={updatePostHandler}/>
  )
}
