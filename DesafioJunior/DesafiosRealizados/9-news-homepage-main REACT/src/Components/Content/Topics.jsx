import style from './Topics.module.css';

const Topics = ({number, titulo, descricao, image}) => {
  return (
    <div className={style.content}>
      <div className={style.image} style={{background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>

      <div className={style.info}>
        <h1>{number}</h1>
        <h2>{titulo}</h2>{/*caso seja um link é só colocar uma tag a*/}
        <p>{descricao}</p>
      </div>
    </div>
  )
}

export default Topics;