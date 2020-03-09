import React from 'react';
import './App.css';




class App extends React.Component{
  render(){
    function allowDrop(ev) {
      ev.preventDefault();
      }
    
      function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
      }
    
      function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
    return (
      <body>
        <h1>Title</h1>

        <section className="game-app">

          <section className="col-item wrap">
            <div className="rotor"></div>
            <div id="drag1" className="mat SALMON   draggable"      draggable="true" onDragStart="drag(event)"></div>
            <div id="drag2" className="triangle     draggable"      draggable="true" onDragStart="drag(event)"></div>
            <div id="drag3" className="socle maroon draggable"      draggable="true" onDragStart="drag(event)"></div>

            <div className="rotor"></div>
            <div id="drag5" className="triangle       draggable"     draggable="true" onDragStart="drag(event)"></div>
            <div id="drag6" className="socle pink     draggable"     draggable="true" onDragStart="drag(event)"></div>
            <div id="drag7" className="mat INDIANRED  draggable"     draggable="true" onDragStart="drag(event)"></div>

            {/* // Example
            <div id="drag2" class="draggable" draggable="true" ondragstart="drag(event)"></div>
                      
            <div class="dropper margin" ondrop="drop(event)" ondragover="allowDrop(event)"></div> */}
          </section>

          <section className="dropper zone" onDrop="drop(event)" onDragOver="allowDrop(event)">

          </section>

          <section className="col-item wrap">
            <div className="rotor"></div>
            <div className="mat SALMON draggable"     draggable="true"></div>
            <div className="socle maroon draggable"   draggable="true"></div>
            <div className="triangle draggable"       draggable="true"></div>

            <div className="rotor"></div>
            <div className="triangle draggable"       draggable="true"></div>
            <div className="mat INDIANRED draggable"  draggable="true"></div>
            <div className="socle pink draggable"     draggable="true"></div>
          </section>
        </section>

      </body>
    );
  }
}

export default App;

{/* <div className="paysage h150px w150px" style={{backgroundImage: `url(${Pacman})`}}></div>
        <div className="paysage h150px w150px" style={{backgroundImage: `url(${Bouclier})`}}></div>
        <div className="paysage h150px w150px" style={{backgroundImage: `url(${Crane})`}}></div> */}