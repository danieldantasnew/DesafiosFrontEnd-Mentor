import style from './News.module.css';

const News = ({id, titulo, descricao, ultimo}) => {
  return (
    <div className={style.container} id={id}>
      <h2 className={style.titulo}>{titulo}</h2>
      <p className={style.descricao} style={ultimo ? {border: 'none'} : {}}>{descricao}</p>
    </div>
  )
}

export default News;