import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import StripeAchat  from "./StripeAchat";

class Shop extends Component {
    render() {
        return (
            <body className="">
                <nav id="nav">
        {/*            <ul className="row">
                        <li className="white_color li_nav">Name</li>
                        <li className="white_color li_nav">Name</li>
                        <li className="white_color li_nav">Name</li>
                    </ul>
        */}
                </nav>
                <main id="main_shop">
                    <h2>Shop Luxéole</h2>
                    <section className="row around">
                        <div className="card2">

                        </div>
                        <div className="card2"></div>
                        <div className="card2"></div>
                    </section>

                    <section class="container content-section">
                        <div class="cart-row">
                            <span class="cart-item cart-header cart-column">ITEM</span>
                            <span class="cart-price cart-header cart-column">PRICE</span>
                            <span class="cart-quantity cart-header cart-column">QUANTITY</span>
                        </div>
                        <div class="cart-items">
                        </div>
                        <div class="cart-total">
                            <strong class="cart-total-title">Total</strong>
                            <span class="cart-total-price">$0</span>
                        </div>
                        <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
                    </section>
                </main>
                <footer id="footer_shop" className="row">
                    <div>
                    <input />
                    <button>Envoie</button>
                    </div>
                </footer>
                </body>
                )
            }
        }
        
        export default Shop
        // <StripeAchat />
