import React, { useEffect } from 'react';
import styles from './Header.module.css'
import Menu from './Menu';
import Links from '../Links';

const Header = ({tamanho}) => {

  const [menu, setMenu] = React.useState(false);
  const [links, setLinks] = React.useState(false);

  React.useEffect(()=> {
    setLinks(tamanho);
  }, [tamanho])

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <section className={styles.header}>
        <div className={styles.logoMenu}>
          <h1><a href="#" className={styles.logoA}>loopstudios</a></h1>
          {links ? <div className={styles.menu}><div className={styles.imageHamb} onClick={handleMenu}></div></div> : <Links estiloDesktop={{display: 'flex', flexDirection: 'row', marginBottom: '0px'}}/>}
        </div>
        {menu && <Menu onClick={handleMenu}/>}
        <div className={styles.apresentacao}>
          <h2>Immersive experiences that deliver</h2>
        </div>
      </section>
    </>
  )
}

export default Header;