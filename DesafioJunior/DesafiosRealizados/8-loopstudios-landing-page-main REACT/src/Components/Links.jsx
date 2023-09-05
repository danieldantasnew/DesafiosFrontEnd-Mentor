import React from 'react';
import style from './Links.module.css';

const Links = ({estilo, estiloDesktop}) => {
  return (
    <div className={style.links}>
    <ul style={estiloDesktop}>
      <li><a href="#" style={estilo}>About</a></li>
      <li><a href="#" style={estilo}>Careers</a></li>
      <li><a href="#" style={estilo}>Events</a></li>
      <li><a href="#" style={estilo}>Products</a></li>
      <li><a href="#" style={estilo}>Support</a></li>
    </ul>
  </div>
  )
}

export default Links