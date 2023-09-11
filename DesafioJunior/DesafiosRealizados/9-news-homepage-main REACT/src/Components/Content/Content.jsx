import React from 'react';
import style from './Content.module.css';
import News from './News';

const Content = () => {

  const news = [
    {
      id: 0,
      titulo: 'Hydrogen VS Electric Cars',
      descricao: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      id: 1,
      titulo: 'The Downsides of AI Artistry',
      descricao: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      id: 2,
      titulo: 'Is VC Funding Drying Up?',
      descricao: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ]

  return (
    <div>
      <div className={style.contentTop}>
        <div className={style.imageContent}></div>
        <h2>The Bright Future of Web 3.0?</h2>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button>Read More</button>
      </div>

      <div className={style.contentCenter}>
        <h1>New</h1>
        {news.map((newsletter) => <News key={newsletter.id} id={newsletter.id} titulo={newsletter.titulo} descricao={newsletter.descricao}/>)}
      </div>
    </div>

    
  )
}

export default Content;