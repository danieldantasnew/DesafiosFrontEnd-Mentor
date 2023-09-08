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
    tamanhoTela(965);
  }, [])

  window.addEventListener('resize', ()=> {
    tamanhoTela(965);
  });

  return (
    <>
      <section className={style.bgHeader}>
        <div className={style.tamanhoMax}>
          <Header tamanho={bgHeader}/>
          <Content tamanho={bgHeader}/>
        </div>
        <Footer/>
      </section>
    </>
  )
}

export default App;
