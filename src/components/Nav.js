import React, { Component } from 'react'
import { NavLink } from "react-router-dom"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export class Nav extends Component {
    render() {
        return (
            <nav id="nav">
            <ul className="navbar">
                <NavLink to="/"><li id="home_nav" className="li_nav"> <FontAwesomeIcon size="3x" color="white" icon={faHome} /> </li> </NavLink>
                <a href="https://Paypal.me/CarnetinleParc"><li className="li_nav"> <FontAwesomeIcon size="3x" color="white" icon={faHandHoldingUsd} /> </li> </a>
                <li id="soutenir_text" className="li_nav"> Soutenir le Projet <br/> <br/> Soutenir les developpeur</li>
                <NavLink to="/shop"><li className="li_nav"> <FontAwesomeIcon size="3x" color="white" icon={faCartArrowDown} /> </li> </NavLink>
            </ul>
            </nav>
        )
    }
}
