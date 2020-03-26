// src/App.js

import React from 'react';
import 'bulma/css/bulma.css';
import './css/App.css';
import { useAuth0 } from './contexts/auth0-context';
import Header from './components/Header';

import ResponsiveEmbed from 'react-responsive-embed';
import Game from './Game';

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
                  <ResponsiveEmbed src='https://www.youtube.com/embed/RPcQLZ0xBAI' ratio='4:3' />
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