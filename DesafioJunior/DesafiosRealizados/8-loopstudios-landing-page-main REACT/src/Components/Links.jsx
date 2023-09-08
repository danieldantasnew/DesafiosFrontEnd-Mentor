import style from './Links.module.css';

const Links = ({estilo, estiloDesktop}) => {
  return (
    <ul className={style.links} style={estiloDesktop}>
      <li><a href="#" style={estilo}>About</a></li>
      <li><a href="#" style={estilo}>Careers</a></li>
      <li><a href="#" style={estilo}>Events</a></li>
      <li><a href="#" style={estilo}>Products</a></li>
      <li><a href="#" style={estilo}>Support</a></li>
    </ul>
  )
}

export default Links