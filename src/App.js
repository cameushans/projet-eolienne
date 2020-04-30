// src/App.js

import React from 'react';
import 'bulma/css/bulma.css';
import './css/App.css';
import { useAuth0 } from './contexts/auth0-context';
import Header from './components/Header';
import Game from './Game';
import videos from '../src/img/Sky-media.mp4';

function App() {
  const { isLoading, user, loginWithRedirect } = useAuth0();

  return (
    <>
      <Header />

      <div className="background fullheight">
        <div className="informations">
          <div className="presentation">
            {!isLoading && !user && (
              <>
                <div className="video">
                  <video controls >
                    <source src={videos} type="video/mp4" />
                  </video>
                </div>
                
                <h2>Accéder au jeu</h2>
                <button onClick={loginWithRedirect} className="button is-danger">
                  Login
                </button>
              </>
            )}
            {!isLoading && user && (
              
              <>
                <div className="jeu">
                  <Game />
                </div>
                
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;