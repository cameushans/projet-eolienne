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
                    <h2 className="margin50" style={{textAlign: 'center'}}>Shop Luxéole</h2>
                    <section className="row around wrap">
                        <div className="card2 info wrap">
                            <img className="photographie" src={rotor3D} />
                            <div className="row area-text">
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO ARTICLE</button>
                                <span>10€</span>
                            </div>
                            <div className="wesh">contraction de Wireless Fidelity<br/>2ème ligne </div>
                        </div>
                        <div className="card2 info"> 
                            <img className="photographie" src={socle3D} />
                            <div className="row area-text">
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO ARTICLE</button>
                                <span>10€</span>
                            </div>
                            <div className="wesh">contraction de Wireless Fidelity<br/>2ème ligne </div>
                        </div>
                        <div className="card2 info"> 
                            <img className="photographie" src={rotor3D} />
                            <div className="row area-text">
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO ARTICLE</button>
                                <span>10€</span>
                            </div>
                            <div className="wesh">contraction de Wireless Fidelity<br/>2ème ligne </div>
                        </div>
                    </section>

                    <section className="container content-section margin50">
                        <div className="cart-row">
                            <span className="cart-item cart-header cart-column">ITEM</span>
                            <span className="cart-price cart-header cart-column">PRICE</span>
                        </div>
                        <div className="cart-items">
                        </div>
                        <div className="cart-total">
                            <strong className="cart-total-title">Total</strong>
                            <span className="cart-total-price">0€</span>
                        </div>
                        <StripeAchat />
                    </section>
                </main>
                </body>
                )
            }
        }
        
        export default Shop


    //     <footer id="footer_shop" className="row">
    //     <form className="form__group">
    //     <input className="form__field"/>
    //     <label for="name" class="form__label">Name</label>
    //     <button className="form__btn">Envoie</button>
    //     </form>
    //     </footer>