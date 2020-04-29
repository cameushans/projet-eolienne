// src/components/Header.js

import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import '../css/Header.css'

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav className="bgdark">
          <div className="navbar">
            {/* logo */}
            <div className="infos">
              <div className="logo"></div>
              <div className="brand">
                
                <button className="company">Lucéole sky media</button>
              </div>
            </div>

            {/* menu items */}
            <div className="end">
              {/* if there is no user. show the login button */}
              {!isLoading && !user && (
                <button onClick={loginWithRedirect} className="authentify">
                  Login
                </button>
              )}

              {/* if there is a user. show user name and logout button */}
              {!isLoading && user && (
                <>
                  <button className="navbar-item">{user.name}</button>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="navbar-item"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
        </div>
      </nav>
    </header>
  );
}