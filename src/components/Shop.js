import React, { Component } from 'react'
import Caisse  from "./Caisse";

import rotor3D from '../img/rotor3D.JPG'
import socle3D from '../img/socle3D.JPG'
import { Nav } from "./Nav";



class Shop extends Component {
    constructor(){
        super()
        this.state = {
            totalPrice: 0,
            elemBattrie: 12,
            elemLampe: 8,
            elemPlan: 19,
            planActive: false,
            lampActive: false,
            battrieActive: false
        }
    }
    Plan() {
        this.setState({totalPrice: this.state.totalPrice + this.state.elemPlan, planActive: true})
    }

    Battrie() {
        this.setState({totalPrice: this.state.totalPrice + this.state.elemBattrie, lampActive: true})
    }

    Lampe() {
        this.setState({totalPrice: this.state.totalPrice + this.state.elemLampe, battrieActive: true})
    }

    render() {
        return (
            <div>
                <Nav />
                <main>
                    <h2 className="margin50" style={{textAlign: 'center'}}>Shop Luxéole</h2>
                    <section className="row around wrap">
                        <div className="card2 info wrap">
                            <img className="photographie" src={rotor3D} alt="rotor"/>
                            <div className="row area-text">
                                <button className="btn btn-primary shop-item-button" onClick={this.Plan.bind(this)} type="button">ADD TO ARTICLE</button>
                                <span>{this.state.elemPlan}€</span>
                            </div>
                            <div className="blablaBulle">Les plans machiavélique haha !!<br/>Plan éolienne  </div>
                        </div>
                        <div className="card2 info"> 
                            <img className="photographie" src={socle3D} alt="socle" />
                            <div className="row area-text">
                                <button className="btn btn-primary shop-item-button" onClick={this.Lampe.bind(this)} type="button">ADD TO DRESS</button>
                                <span>{this.state.elemLampe}€</span>
                            </div>
                            <div className="blablaBulle">lampe qui clignote !<br/>Lampe LED </div>
                        </div>
                        <div className="card2 info"> 
                            <img className="photographie" src={rotor3D} alt="rotor" />
                            <div className="row area-text">
                                <button className="btn btn-primary shop-item-button" onClick={this.Battrie.bind(this)} type="button">ADD TO ARTICLE</button>
                                <span>{this.state.elemBattrie}€</span>
                            </div>
                            <div className="blablaBulle">battrie en fusion<br/>Chargeurs Batterie</div>
                        </div>
                    </section>
                    <Caisse details={this.state} />
                </main>
            </div>
        )
    }
}
    
export default Shop