import style from './Menu.module.css';
import Links from '../Links';

const Menu = ({onClick}) => {
  return (
    <section className={style.bgMenu}>
      <div className={style.headerMenu}>
      <h1><a href="#" className={style.logoA}>loopstudios</a></h1>
      <div className={style.imageX} onClick={onClick}></div>
      </div>
      <div className={style.Menu}>
        <Links estilo={{textTransform: 'uppercase', fontWeight: 500, fontFamily: 'var(--josefin)', fontSize: '1.3rem'}}/>
      </div>
    </section>
  )
}

export default Menu;