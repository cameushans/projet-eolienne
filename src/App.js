import React from 'react';
import './App.css';

// Objet draggable
import Pacman from './img/pacman-151558_1280.png'
import Bouclier from './img/bouclier.png'
import Crane from './img/crane.png'

function App() {
  return (
    <body>
      <h1>Title</h1>
      <section className="game-app">
        <section className="col-item wrap">

          <div className="rotor"></div>
          <div className="mat INDIANRED"></div>
          <div className="triangle"></div>
          <div className="socle maroon"></div>

          <div className="rotor"></div>
          <div className="triangle"></div>
          <div className="socle maroon"></div>
          <div className="mat INDIANRED"></div>


        </section>


        <section className="col-item wrap">

          <div className="rotor"></div>
          <div className="mat INDIANRED"></div>
          <div className="socle maroon"></div>
          <div className="triangle"></div>

          <div className="rotor"></div>
          <div className="triangle"></div>
          <div className="mat INDIANRED"></div>
          <div className="socle maroon"></div>
        </section>
      </section>


    </body>
  );
}

export default App;


{/* <div className="paysage h150px w150px" style={{backgroundImage: `url(${Pacman})`}}></div>
        <div className="paysage h150px w150px" style={{backgroundImage: `url(${Bouclier})`}}></div>
        <div className="paysage h150px w150px" style={{backgroundImage: `url(${Crane})`}}></div> */}