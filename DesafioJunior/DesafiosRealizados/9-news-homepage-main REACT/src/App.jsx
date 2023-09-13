import React from 'react';
import style from './App.module.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';


function App() {
  const [screen, setScreen] = React.useState(null);

  React.useEffect(()=> {
    tamanhoTela(1000)
  }, []);

  function tamanhoTela(tamanho) {
    const screenSize = window.matchMedia(`(max-width: ${tamanho}px)`).matches;

    if(screenSize){
      setScreen(true);
    } else {
      setScreen(false);
    }
  }
  
  window.addEventListener('resize', ()=> {
    tamanhoTela(1000)
  });

  return (
    <>
      <section className={style.Screen}>
        <Header telaMobile={screen}/>
        <Content/>
      </section>
    </>
  )
}

export default App;
