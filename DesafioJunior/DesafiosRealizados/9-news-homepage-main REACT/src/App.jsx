import style from './App.module.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';


function App() {
  

  return (
    <>
      <section className={style.Screen}>
        <Header/>
        <Content/>
      </section>
    </>
  )
}

export default App;
