import style from './News.module.css';

const News = ({id, titulo, descricao}) => {
  return (
    <div className={style.container} id={id}>
      <h2 className={style.titulo}>{titulo}</h2>
      <p className={style.descricao}>{descricao}</p>
    </div>
  )
}

export default News;