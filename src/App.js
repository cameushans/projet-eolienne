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

      <div className="hero background fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            {!isLoading && !user && (
              <>
                <ResponsiveEmbed src='https://www.youtube.com/embed/RPcQLZ0xBAI' ratio='16:9' />
                <h2>Accéder au jeu</h2>
                <button onClick={loginWithRedirect} className="button is-danger">
                  Login
              </button>
              </>
            )}
            {!isLoading && user && (
              
              <>
                <Game />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;