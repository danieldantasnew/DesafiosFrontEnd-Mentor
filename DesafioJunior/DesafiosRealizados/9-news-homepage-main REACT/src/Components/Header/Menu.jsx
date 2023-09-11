import React from 'react';
import style from './Menu.module.css';
import Modal from '../Modal/Modal';
import Links from '../Links/Links.jsx';

const Menu = ({onClick}) => {
  return (
    <>
      <Modal onClick={onClick}/>
      <div className={style.menu}>
        <div className={style.close} onClick={onClick}></div>
        <Links/>
      </div>
    </>
  )
}

export default Menu;