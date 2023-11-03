import React from 'react'
import { Post } from './Post/Post'



export function MyPosts(props) {

  
  const addPost = () => {
    props.addPost()
  }
  const updatePostHandler = (e) => {
    let text = e.currentTarget.value
    props.updateNewPostText(text)
  }
  return (
    <div>Мои посты
      <div>
        <textarea onChange={updatePostHandler} value={props.newText  } ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {props.postsData.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)}
    </div>
  )
}
