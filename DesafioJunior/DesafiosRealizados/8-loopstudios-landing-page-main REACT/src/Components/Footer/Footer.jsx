import React from 'react';
import style from './Footer.module.css';
import Links from '../Links';

const Footer = ({tamanho}) => {
  return (
    <footer className={style.footer}>
      <section className={style.tamanhoMaximoFooter}>
        <h2 className={style.logoFooter}>loopstudios</h2>
        <Links estiloDesktop={tamanho ? {display: 'flex', flexDirection: 'column', fontSize: '1rem'} : {display: 'flex', flexDirection: 'row', gridArea: 'sobre', fontSize: '0.8rem', marginBottom: '0px'}}/>
        
        <div className={style.social}>
            <ul>
              <li><a href="https://pt-br.facebook.com/" target='_blank' rel='noreferrer'><img src="../../../public/images/icon-facebook.svg" alt="Facebook" /></a></li>
              <li><a href="https://twitter.com/" target='_blank' rel='noreferrer'><img src="../../../public/images/icon-twitter.svg" alt="Twitter" /></a></li>
              <li><a href="https://br.pinterest.com/" target='_blank' rel='noreferrer'><img src="../../../public/images/icon-pinterest.svg" alt="Pinterest"/></a></li>
              <li><a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><img src="../../../public/images/icon-instagram.svg" alt="Instagram" /></a></li>
            </ul>
          </div>
          <p className={style.footerText}>© 2021 Loopstudios. All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer;