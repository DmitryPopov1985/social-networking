import React from 'react';
import cl from './Message.module.css';

export function Message({ message, ...props }) {
  return <div className={cl.message}>{message}</div>;
}
