import React from 'react';
import style from './Modal.module.css';

const Modal = ({onClick}) => {
  return (
    <div className={style.modal} onClick={onClick}></div>
  )
}

export default Modal;