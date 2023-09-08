import React from 'react';

const Card = ({id, classe, titulo, image, tamanho}) => {

  const [efeitoCartao, setEfeitoCartao] = React.useState(null);
  const [efeitoTituloCartao, setEfeitoTituloCartao] = React.useState(null);
  
  function handleMouseEnter() {
    setEfeitoCartao({
      opacity: 0.3,
    });
  
    setEfeitoTituloCartao({
      color: 'var(--preto)',
    });
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
      <img style={{...efeitoCartao}} src={tamanho ? `../../../public/images/mobile/${image}.jpg` : `../../../public/images/desktop/${image}.jpg`} alt={titulo} />
      <h3 style={{...efeitoTituloCartao}}>{titulo}</h3>
    </div>
  )
}

export default Card;