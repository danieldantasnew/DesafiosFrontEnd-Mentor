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
        <Links estilo={{textTransform: 'uppercase'}}/>
      </div>
    </section>
  )
}

export default Menu;