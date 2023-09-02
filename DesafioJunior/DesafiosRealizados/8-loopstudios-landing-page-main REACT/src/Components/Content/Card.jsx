import React from 'react';



const Card = ({id, classe, titulo, image}) => {

  const [efeitoCartao, setEfeitoCartao] = React.useState(null);
  const [efeitoTituloCartao, setEfeitoTituloCartao] = React.useState(null);
  
  function handleMouseEnter() {
    setEfeitoCartao({
      opacity: 0.5,
    });
  
    setEfeitoTituloCartao({
      color: 'var(--preto)',
    })
  }
  
  function handleMouseLeave() {
    setEfeitoCartao({
      opacity: 1,
    });
  
    setEfeitoTituloCartao({
      color: 'var(--branco)',
    })
  }

  return (
    <div key={id} className={classe} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <img style={{...efeitoCartao}} src={`../../../public/images/mobile/${image}.jpg`} alt={titulo} />
      <h3 style={{...efeitoTituloCartao}}>{titulo}</h3>
    </div>
  )
}

export default Card;