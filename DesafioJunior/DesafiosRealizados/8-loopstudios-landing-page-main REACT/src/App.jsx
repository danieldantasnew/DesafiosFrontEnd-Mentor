import React, { useEffect } from "react";
import style from "./App.module.css";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  const [bgHeader, setBgHeader] = React.useState(false)

  function tamanhoTela(tamanho) {
    const tela = window.matchMedia(`(max-width: ${tamanho}px)`).matches;
    if(tela){
      setBgHeader(true);
    }
    else{
      setBgHeader(false);
    }
  }

  useEffect(()=> {
    tamanhoTela(600);
  }, [])

  window.addEventListener('resize', ()=> {
    tamanhoTela(600);
  });

  return (
    <>
      <section className={bgHeader ? style.bgHeader : style.bgHeaderDesktop}>
        <div className={style.tamanhoMaxDesktop}>
          <Header tamanho={bgHeader}/>
          <Content/>
        </div>
        <Footer/>
      </section>
    </>
  )
}

export default App;
