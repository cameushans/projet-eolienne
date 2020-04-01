import React, { Component } from 'react';

// CSS
import './css/Game.css';
import './css/Animation.css';
import './css/ZoneDrop.css';
import './css/DraggableElements.css';

// Components 
import Board from './components/Board';
import Card from './components/Card';
import Button from './components/Button';
  

class App extends Component {
  render(){
    return (
      <div>
        <Button />
        <main className="flexbox">
          <Board  id="board-1"            className="board">
            <Card id="rotor"              className="rotor card"    style={{backgroundColor:  'blueviolet'}}  draggable="true">rotor</Card>
            <Card id="pale-left"          className="pale  card"     style={{backgroundColor: 'blue'}}         draggable="true" >L</Card>
            <Card id="pale-top"           className="pale  card"     style={{backgroundColor: 'orange'}}       draggable="true" >Top</Card>
          </Board>  
          
            
          <div className="central_column">
              <Board id="pale-top-zone"       className="board-pale-top"   dataBrand="pale-top" ></Board>
              
              <div id="pale-zone" className="row pale-zone">
                <Board id="pale-left-zone"    className="board-pale-right" dataBrand="pale-left" ></Board>
                <Board id="pale-right-zone"   className="board-pale-left"  dataBrand="pale-right" ></Board>
              </div>

              <Board id="rotor-zone"          className="board-rotor"      dataBrand="rotor"></Board>
              <Board id="mat-zone"            className="board-mat"        dataBrand="mat"  ></Board>
          </div>
  
  
          <Board id="board-3"             className="board">
            <Card id="mat"                className="mat card"      style={{backgroundColor: '#FA8072'}}      draggable="true" />
            <Card id="pale-right"         className="pale  card"     style={{backgroundColor: 'crimson'}}      draggable="true"  >R</Card>
          </Board>          
        </main>
      </div>
    );
  }
}
export default App;