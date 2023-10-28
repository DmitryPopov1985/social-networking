import React from 'react'
import cl from './MyPosts.module.css'
import { Post } from './Post/Post'
import { addPostAC, updateNewPostAC } from '../../../redux/profile-reducer'



export function MyPosts(props) {

  
  const addPost = () => {
    
      props.dispatch(addPostAC())
  }
  const updatePostHandler = (e) => {
    let text = e.target.value
    props.dispatch(updateNewPostAC(text))
  }
  return (
    <div>Мои посты
      <div>
        <textarea onChange={updatePostHandler} value={props.state.newText  } ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {props.state.postsData.map(el => <Post message={el.message} likesCount={el.likesCount} />)}
    </div>
  )
}
