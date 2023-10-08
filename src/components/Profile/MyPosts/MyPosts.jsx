import React from 'react'
import cl from './MyPosts.module.css'
import { Post } from './Post/Post'

const postsData = [
  { id: '1', message: "Хорошая погода", likesCount: 7 },
  { id: '2', message: "Как дела?", likesCount: 0 },
  { id: '3', message: "Василий, привет", likesCount: 18 },

]

export function MyPosts() {
  return (
    <div>Мои посты
      <div>
        <textarea ></textarea>
        <button>Add post</button>
      </div>
      {postsData.map(el => <Post message={el.message} likesCount={el.likesCount} />)}
    </div>
  )
}
