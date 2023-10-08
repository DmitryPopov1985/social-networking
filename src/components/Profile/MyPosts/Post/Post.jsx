import React from 'react'
import cl from './Post.module.css'

export function Post({message, ...props}) {
  return (

    <div>
      {message}
    </div>

  )
}
