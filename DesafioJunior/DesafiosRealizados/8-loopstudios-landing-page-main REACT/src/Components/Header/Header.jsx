import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.logoMenu}>
          <h1><a href="#" className={styles.logoA}>loopstudios</a></h1>
          <div className={styles.menu}><div className={styles.imageHamb}></div></div>
        </div>
        <div className={styles.apresentacao}>
          <h2>Immersive experiences that deliver</h2>
        </div>
      </section>
    </>
  )
}

export default Header;