import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import StripeAchat  from "./StripeAchat";

class Shop extends Component {
    render() {
        return (
            <body>
                <header>

                </header>
                <main>
                    <h2>Shop Luxéole</h2>
                    <section>
                        <div className="card2">

                        </div>
                        <div className="bloc_item"></div>
                        <div className="bloc_item"></div>
                    </section>
                </main>
                <footer>
                    <StripeAchat />
                </footer>
            </body>
        )
    }
}

export default Shop
