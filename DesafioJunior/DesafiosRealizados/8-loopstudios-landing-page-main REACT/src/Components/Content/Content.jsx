import style from './Content.module.css';
import Card from './Card';

const Content = () => {

  const creations = [
    {
      id: 0,
      titulo: 'Deep Earth',
      image: 'image-deep-earth',
    },
    {
      id: 1,
      titulo: 'Night Arcade',
      image: 'image-night-arcade',
    },
    {
      id: 2,
      titulo: 'Soccer Team VR',
      image: 'image-soccer-team',
    },
    {
      id: 3,
      titulo: 'The Grid',
      image: 'image-grid',
    },
    {
      id: 4,
      titulo: 'From up above VR',
      image: 'image-from-above',
    },
    {
      id: 5,
      titulo: 'Pocket Borealis',
      image: 'image-pocket-borealis',
    },
    {
      id: 6,
      titulo: 'The curiosity',
      image: 'image-curiosity',
    },
    {
      id: 7,
      titulo: 'make it fisheye',
      image: 'image-fisheye',
    },
  ]



  return (
    <>
      <div className={style.firstContent}>
        <div className={style.imageFirstContent}></div>
        <div className={style.infoFirstContent}>
          <h2>The leader in interactive VR</h2>
          <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>

        <div className={style.creations}>
          <h2>Our Creations</h2>
          {creations && creations.map((creation) => <Card key={creation.id} id={creation.id} classe={style.imagesCreation} titulo={creation.titulo} image={creation.image}/>
          )}
        </div>

        {creations && <button className={style.buttonCreation}>See All</button>}
      </div>
    </>
  )
}

export default Content;