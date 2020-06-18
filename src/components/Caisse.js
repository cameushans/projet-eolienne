import React, { Component } from 'react'
import StripeAchat  from "../functions/StripeAchat";
// img
import rotor3D from '../img/rotor3D.JPG'
import socle3D from '../img/socle3D.JPG'

class Caisse extends Component {
    render() {
        return (
            <section id="caisse" className="container content-section margin50">
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">ITEM</span>
                    <span className="cart-price cart-header cart-column">PRICE</span>
                </div>
                <div className="cart-items">
                </div>
                <div className="cart-total">
                    <strong className="cart-total-title">Total</strong>
                    <span className="cart-total-price">{this.props.details.totalPrice} €</span>
                    {   this.props.details.isPlan === true ? 
                        <div id="plan"  className="articlesPanier">
                            <img src={socle3D} className="articlesPanierImg" alt="socle" />
                            <div>Plan du produit </div>
                            <button className="btn btn-danger" onClick={this.props.removePlan}>Remove</button>
                        </div>
                        : console.log("MARCHE PAS !")
                    }

                    {   this.props.details.isLampe === true ? 
                        <div id="lamp"  className="articlesPanier">
                            <img src={rotor3D} className="articlesPanierImg" alt="rotor" />
                            <div>Lampe qui clignote</div>
                            <button className="btn btn-danger" onClick={this.props.removeLampe}>Remove</button>
                        </div>
                        : console.log("MARCHE PAS !")
                    }
                    {   this.props.details.isBattrie === true ? 
                        <div id="battrie"  className="articlesPanier">
                            <img src={socle3D} className="articlesPanierImg" alt="socle"/>
                            <div>Battrie qui tourne</div>
                            <button className="btn btn-danger" onClick={this.props.removeBattrie}>Remove</button>
                        </div>
                        : console.log("MARCHE PAS !")
                    }
                </div>
                <StripeAchat total={this.props.details.totalPrice}/>
            </section>
        )
    }
}

export default Caisse