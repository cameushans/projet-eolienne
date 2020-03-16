import React, { Component } from 'react';
import './App.css';

// Components 
import Board from './components/Board';
import Card from './components/Card';

// import Triangle from './components/Triangle';
// import Combinaison from './components/Combinaison';
// import Isset from './components/Isset';


class App extends Component {
  render(){
    var elem = document.querySelectorAll(".card");

    // if (elem < 19) {
    //   return(
    //     <span className="ok">Have a beer !</span>
    //   )
    // }
    // else{
    //   return(
    //     <span className="not-ok">Sorry, you are not old enough.</span>
    //   )
    // }

    // {let elem2 = ReactDOM.findDOMNode(<Board id="board-9" className="board-central" />).getElementsByClassName('card').length}
  
    return (
      <div>
        <main className="flexbox">

          <Board  id="board-1" className="board">
            <Card id="card-13" className="mat card"       style={{backgroundColor: 'pink'}}         draggable="true"  />
            <Card id="rotor"   className="rotor card"     style={{backgroundColor: 'yellowgreen'}}  draggable="true"  />
            <Card id="card-10" className="socle card"     style={{backgroundColor: 'pink'}}         draggable="true"  />
            <Card id="card-21" className="pale  card"     style={{backgroundColor: 'crimson'}}      draggable="true"  />

            {/* <Card id="card-20" className="rotor card"     style={{backgroundColor: 'teal'}}         draggable="true"  types='rotor' /> */}
          </Board>
  
  
          
            
          <div id="board-9" className="central_column">
              <Board id="pale-top-1"      className="board-pale-top" ></Board>
              
              <div className="row pale-zone">
                <Board id="pale-right-1"  className="board-pale-right" ></Board>
                <Board id="pale-left-1"   className="board-pale-left" ></Board>
              </div>

              <Board id="board-90"        className="board-rotor" dataBrand="rotor"></Board>
              <Board id="board-5"         className="board-mat"></Board>
          </div>
  
  
  
          <Board id="board-3" className="board">
            <Card id="card-15" className="mat card"      style={{backgroundColor: '#FA8072'}}      draggable="true" />
            <Card id="card-24" className="pale card"     style={{backgroundColor: 'blue'}}         draggable="true" />
            <Card id="card-14" className="mat card"      style={{backgroundColor: 'lightyellow'}}  draggable="true" />
            <Card id="card-28" className="pale card"     style={{backgroundColor: 'orange'}}       draggable="true" />
            <Card id="card-27" className="pale card"     style={{backgroundColor: 'violet'}}       draggable="true" />
          </Board>
          
        </main>
      </div>
    );
  }
}
export default App;