import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import StripeAchat  from "./StripeAchat";

import rotor3D from '../img/rotor3D.JPG'
import socle3D from '../img/socle3D.JPG'
import { Nav } from "./Nav";


class Shop extends Component {
    render() {
        return (
            <body className="">
                <Nav />
                <main>
                    <h2 style={{textAlign: 'center'}}>Shop Luxéole</h2>
                    <section className="row around wrap">
                        <div className="card2 info wrap">
                            <img className="photographie" src={rotor3D} />
                            <div className="row area-text">
                                <span id="description_produit">Description</span>
                                <span id="price">3€</span>
                            </div>
                            <div className="wesh">contraction de Wireless Fidelity<br/>2ème ligne </div>
                        </div>
                        <div className="card2 info"> 
                            <img className="photographie" src={socle3D} />
                            <div className="row area-text">
                                <span id="description_produit">Description</span>
                                <span id="price">3€</span>
                            </div>
                            <div className="wesh">contraction de Wireless Fidelity<br/>2ème ligne </div>
                        </div>
                        <div className="card2 info"> 
                            <img className="photographie" src={rotor3D} />
                            <div className="row area-text">
                                <span id="description_produit">Description</span>
                                <span id="price">3€</span>
                            </div>
                            <div className="wesh">contraction de Wireless Fidelity<br/>2ème ligne </div>
                        </div>
                    </section>

                    <section class="container content-section">
                        <div class="cart-row">
                            <span class="cart-item cart-header cart-column">ITEM</span>
                            <span class="cart-price cart-header cart-column">PRICE</span>
                        </div>
                        <div class="cart-items">
                        </div>
                        <div class="cart-total">
                            <strong class="cart-total-title">Total</strong>
                            <span class="cart-total-price">0€</span>
                        </div>
                        <StripeAchat />
                    </section>
                </main>
                <footer id="footer_shop" className="row">
                    <form className="form__group">
                    <input className="form__field"/>
                    <label for="name" class="form__label">Name</label>
                    <button className="form__btn">Envoie</button>
                    </form>
                </footer>
                </body>
                )
            }
        }
        
        export default Shop
