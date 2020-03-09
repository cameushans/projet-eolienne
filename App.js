import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const elements = document.getElementsByTagName('element');
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    function getRandomNumber(min, max) {

      return Math.random() * (max - min) + min;
    
    }

    for (var i = 0; elements.length; i++) {
      const thisElement = elements[i];

      const randomTop = getRandomNumber(0, winHeight);
      const randomLeft = getRandomNumber(0, winWidth);

      thisElement.style.top = randomTop + "px";
      thisElement.style.left = randomLeft + "px";

      

    }
    
  }
  render() {
    return (
      <body>
        <h1>Title</h1>
        <section className="game-app wrap">

          <section className="col-item wrap">
  
            <div className="element rotor"></div>
            <div className="element mat INDIANRED"></div>
            <div className="element triangle"></div>
            <div className="element socle maroon"></div>
  
            <div className="element rotor"></div>
            <div className="element triangle"></div>
            <div className="element socle maroon"></div>
            <div className="element mat INDIANRED"></div>
  
          </section>
  
          <section className="col-item wrap">
  
            <div className="element rotor"></div>
            <div className="element mat INDIANRED"></div>
            <div className="element socle maroon"></div>
            <div className="element triangle"></div>
  
            <div className="rotor"></div>
            <div className="triangle"></div>
            <div className="mat INDIANRED"></div>
            <div className="socle maroon"></div>

          </section>

        </section>
  
  
      </body>
    );
  }
}

export default App;
