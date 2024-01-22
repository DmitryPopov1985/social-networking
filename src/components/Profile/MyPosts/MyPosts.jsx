import React from 'react'
import { Post } from './Post/Post'
import { Field, reduxForm } from 'redux-form'



export function MyPosts(props) {

  
  
  const addNewPost = (values) => {
    props.addPost(values.newPostBody)
   }
  return (
    <div>Мои посты
      <div>
        
        <AddPostReduxForm onSubmit={addNewPost}/>
      </div>
      {props.postsData.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)}
    </div>
  )
}

const AddPostForm =(props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <Field name="newPostBody" component="textarea"  placeholder='Напишите сообщение' />
        <button>Add post</button>
        </form>
  )
}
const AddPostReduxForm = reduxForm({
  form: 'profileAddPostForm'
})(AddPostForm)