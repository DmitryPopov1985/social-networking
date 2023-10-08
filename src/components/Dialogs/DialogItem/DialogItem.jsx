import React from 'react';
import cl from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

export function DialogItem({ name, id, ...props }) {
  const setActive = () => {
    return ({ isActive }) => (isActive ? `${cl.active} ${cl.link}` : cl.link);
  };
  const path = '/dialogs/' + id;
  return <div className={`${cl.dialog}`}>
    <NavLink to={path} className={setActive()}>{name}</NavLink>
  </div>;
}
