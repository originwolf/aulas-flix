import React from 'react';
import dadosIniciais from './data/dados.json';
import Banner from './components/Banner';
import Carousel from "./components/Carousel";

function App() {
  return (
    <article className="banner">
      <Banner
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"By Pedro Martins"}
      />

      <div className="py-5 bg-light-gray">
        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
        <Carousel category={dadosIniciais.categorias[1]} />
        <Carousel category={dadosIniciais.categorias[2]} />
        <Carousel category={dadosIniciais.categorias[3]} />
      </div>
    </article>
  );
}

export default App;