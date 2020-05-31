import React, { Component } from 'react';

// CSS
import './css/App.css';
import './css/Animation.css';
import './css/ZoneDrop.css';
import './css/DraggableElements.css';
import './css/shop.css';

// Components 
import Shop from "./components/Shop"
import Game_app from "./components/Game_app"
  
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


class App extends Component {
  render(){
    return (

          <Router>
            <Route exact path="/" component={Game_app}/>
            <Route exact path='/shop' component={Shop}/>
          </Router>
    );
  }
}
export default App;