import style from './Links.module.css';

const Links = () => {
  return (
    <ul className={style.links}>
      <li><a href="#">home</a></li>
      <li><a href="#">new</a></li>
      <li><a href="#">popular</a></li>
      <li><a href="#">trending</a></li>
      <li><a href="#">categories</a></li>
    </ul>
  )
}

export default Links