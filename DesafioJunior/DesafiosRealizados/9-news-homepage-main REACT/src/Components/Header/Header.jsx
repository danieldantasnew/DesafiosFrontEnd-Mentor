import React from 'react';
import style from './Header.module.css';
import Menu from './Menu.jsx';

const Header = () => {

  const [menu, setMenu] = React.useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <div className={style.Header}>
      <div className={style.logo}></div>
      <div className={style.buttonMenu} onClick={handleMenu}></div>
      {menu && <Menu onClick={handleMenu}/>}
    </div>
  )
}

export default Header;