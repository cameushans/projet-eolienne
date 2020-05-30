import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'

export class Nav extends Component {
    render() {
        return (
            <nav id="nav">
            <ul className="row flex_end">
                <li className="li_nav"> <FontAwesomeIcon size="3x" color="white" icon={faHandHoldingUsd} /> </li>
                <li className="li_nav"> Soutenir le Projet <br/> <br/> Soutenir les developpeur</li>
                <li className="li_nav"> <FontAwesomeIcon size="3x" color="white" icon={faCartArrowDown} /> </li>
            </ul>
            </nav>
        )
    }
}

export default Nav
