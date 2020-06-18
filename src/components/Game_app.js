import React, { Component } from 'react'
import Board from '../functions/Board';
import Card from '../functions/Card';
import Button from '../functions/Button';
import { Nav } from "./Nav";

class Game_app extends Component {
    render() {
        return (
            <div>
            <Nav />
            <main className="flexbox">
              <Board  id="board-1"            className="board">
                <Card id="rotor"              className="rotor card"     style={{backgroundColor:  'blueviolet'}}  draggable="true">rotor</Card>
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
                <Button />
                <Card id="mat"                className="mat card"      style={{backgroundColor: '#FA8072'}}      draggable="true" />
                <Card id="pale-right"         className="pale  card"     style={{backgroundColor: 'crimson'}}      draggable="true"  >R</Card>
              </Board>          
            </main>
            </div>
        )
    }
}

export default Game_app
