import React from 'react'
import cl from './MyPosts.module.css'
import { Post } from './Post/Post'

export function MyPosts() {
  return (
    <div>Мои посты
        <div>
            <textarea ></textarea>
            <button>Add post</button>
        </div>
        <Post message = 'hi'/>
        <Post message = 'whe are you?'/>
    </div>
  )
}
