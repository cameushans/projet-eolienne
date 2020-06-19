import React, { Component } from 'react'
import {Nav} from "./Nav";
import Caisse  from "./Caisse";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

//img
import rotor3D from '../img/rotor3D.JPG'
import socle3D from '../img/socle3D.JPG'

toast.configure();

class Shop extends Component {
    constructor(){
        super()
        this.state = {
            totalPrice: 0,
            planPrice: 19,
            lampePrice: 8,
            battriePrice: 12,

            isPlan: false,
            isLampe: false,
            isBattrie: false
        }
    }
    
    
    // Add article btn
    Plan() {
        if (this.state.totalPrice === 19 || 27 || 39 || 31 ) {
            this.setState({totalPrice: this.state.totalPrice + this.state.planPrice, isPlan: true})
            toast("Article Ajouté !", { type: "success" });
          } else {
            toast("Article déja Ajouté !", { type: "error" });
          }
    }
    Battrie() {
        this.setState({totalPrice: this.state.totalPrice + this.state.battriePrice, isBattrie: true})
    }
    Lampe() {
        this.setState({totalPrice: this.state.totalPrice + this.state.lampePrice, isLampe: true})
    }

    // Remove btn
    removePlan() {
        this.setState({totalPrice: this.state.totalPrice - this.state.planPrice, isPlan: false})
    }

    removeBattrie() {
        this.setState({totalPrice: this.state.totalPrice - this.state.battriePrice, isBattrie: false})
    }

    removeLampe() {
        this.setState({totalPrice: this.state.totalPrice - this.state.lampePrice, isLampe: false})
    }

    render() {
        console.log("TOTAL PRICE " ,this.state.totalPrice)
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
                                <span>{this.state.planPrice}€</span>
                            </div>
                            <div className="blablaBulle">Les plans machiavélique haha !!<br/>Plan éolienne  </div>
                        </div>
                        <div className="card2 info"> 
                            <img className="photographie" src={socle3D} alt="socle" />
                            <div className="row area-text">
                                <button className="btn btn-primary shop-item-button" onClick={this.Lampe.bind(this)} type="button">ADD TO DRESS</button>
                                <span>{this.state.lampePrice}€</span>
                            </div>
                            <div className="blablaBulle">lampe qui clignote !<br/>Lampe LED </div>
                        </div>
                        <div className="card2 info"> 
                            <img className="photographie" src={rotor3D} alt="rotor" />
                            <div className="row area-text">
                                <button className="btn btn-primary shop-item-button" onClick={this.Battrie.bind(this)} type="button">ADD TO ARTICLE</button>
                                <span>{this.state.battriePrice}€</span>
                            </div>
                            <div className="blablaBulle">battrie en fusion<br/>Chargeurs Batterie</div>
                        </div>
                    </section>
                    <Caisse 
                        details={this.state}
                        removePlan={this.removePlan.bind(this)} 
                        removeLampe={this.removeLampe.bind(this)} 
                        removeBattrie={this.removeBattrie.bind(this)} 
                     />
                </main>
            </div>
        )
    }
}

export default Shop