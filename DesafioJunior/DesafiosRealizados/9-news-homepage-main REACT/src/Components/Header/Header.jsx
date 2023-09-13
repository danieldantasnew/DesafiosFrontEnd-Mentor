import React from 'react';
import style from './Header.module.css';
import Menu from './Menu.jsx';
import Links from '../Links/Links';

const Header = ({telaMobile}) => {

  const [menu, setMenu] = React.useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <div className={style.Header}>
      <div className={style.logo}></div>
      {telaMobile ? <div className={style.buttonMenu} onClick={handleMenu}></div> : <Links/>}
      {menu && <Menu onClick={handleMenu}/>}
    </div>
  )
}

export default Header;