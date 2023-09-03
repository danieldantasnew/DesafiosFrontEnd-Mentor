import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h2 className={style.logoFooter}>loopstudios</h2>
      <div className={style.links}>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>

      <div className={style.social}>
          <ul>
            <li><a href="https://pt-br.facebook.com/" target='_blank' rel='noreferrer'><img src="../../../public/images/icon-facebook.svg" alt="Facebook" /></a></li>
            <li><a href="https://twitter.com/" target='_blank' rel='noreferrer'><img src="../../../public/images/icon-twitter.svg" alt="Twitter" /></a></li>
            <li><a href="https://br.pinterest.com/" target='_blank' rel='noreferrer'><img src="../../../public/images/icon-pinterest.svg" alt="Pinterest"/></a></li>
            <li><a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><img src="../../../public/images/icon-instagram.svg" alt="Instagram" /></a></li>
          </ul>
        </div>

        <p className={style.footerText}>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
  )
}

export default Footer;