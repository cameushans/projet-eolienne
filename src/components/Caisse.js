import React, { Component } from 'react'
import StripeAchat  from "./StripeAchat";

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
                    {   this.props.details.planActive === true ? 
                        <div id="plan"  className="articlesPanier">
                            <img src={socle3D} className="articlesPanierImg" />
                            <div>Plan du produit </div>
                            <button className="btn btn-danger">Remove</button>
                        </div>
                        : console.log("MARCHE PAS !")
                    }

                    {   this.props.details.lampActive === true ? 
                        <div id="lamp"  className="articlesPanier">
                            <img src={rotor3D} className="articlesPanierImg" />
                            <div>Lampe qui clignote</div>
                            <button className="btn btn-danger">Remove</button>
                        </div>
                        : console.log("MARCHE PAS !")
                    }

                    {   this.props.details.battrieActive === true ? 
                        <div id="battrie"  className="articlesPanier">
                            <img src={socle3D} className="articlesPanierImg" />
                            <div>Battrie qui tourne</div>
                            <button className="btn btn-danger">Remove</button>
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


    // constructor() {
    //     super()
    //     this.ready = this.ready.bind(this)
    //     this.checkToutSa = this.checkToutSa.bind(this)
    // }
    // ready() {
    //     var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    //     for (var i = 0; i < removeCartItemButtons.length; i++) {
    //         var button = removeCartItemButtons[i]
    //         button.addEventListener('click', removeCartItem)
    //     }

    //     var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    //     for (var i = 0; i < quantityInputs.length; i++) {
    //         var input = quantityInputs[i]
    //         input.addEventListener('change', quantityChanged)
    //     }

    //     var addToCartButtons = document.getElementsByClassName('shop-item-button')
    //     for (var i = 0; i < addToCartButtons.length; i++) {
    //         var button = addToCartButtons[i]
    //         button.addEventListener('click', addToCartClicked)
    //     }

    //     document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    // }

    
    // var stripeHandler = StripeCheckout.configure({
    //     key: stripePublicKey,
    //     locale: 'en',
    //     token: function(token){
    //         // console.log(token)
    //         var items = []
    //         var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    //         var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    //         for (var i = 0; i < cartRows.length; i++){
    //             var cartRow = cartRows[i]
    //             var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    //             var quantity = quantityElement.value
    //             var id = cartRow.dataset.itemId
    //             items.push({
    //                 id: id,
    //                 quantity: quantity
    //             })
    //         }
    //         fetch('/purchase', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 stripeTokenId: token.id,
    //                 items: items
    //             })
    //         }).then(function(res) {
    //             return res.json()
    //         }).then(function(data) {
    //             alert(data.message)
    //             var cartItems = document.getElementsByClassName('cart-items')[0]
    //             while (cartItems.hasChildNodes()) {
    //                 cartItems.removeChild(cartItems.firstChild)
    //             }
    //             updateCartTotal()
    //         }).catch(function(error){
    //             console.error(error)
    //         })
    //     }
    // })
    

    // purchaseClicked() {
    //     // alert('Thank you for your purchase')

    //     var priceElement = document.getElementsByClassName('cart-total-price')[0]
    //     var price = parseFloat(priceElement.innerText.replace('$', '')) * 100
    //     stripeHandler.open({
    //         amount: price
    //     })
    // }

    // removeCartItem(event) {
    //     var buttonClicked = event.target
    //     buttonClicked.parentElement.parentElement.remove()
    //     updateCartTotal()
    // }

    // quantityChanged(event) {
    //     var input = event.target
    //     if (isNaN(input.value) || input.value <= 0) {
    //         input.value = 1
    //     }
    //     updateCartTotal()
    // }

    // addToCartClicked(event) {
    //     var button = event.target
    //     var shopItem = button.parentElement.parentElement
    //     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    //     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    //     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    //     var id = shopItem.dataset.itemId
    //     addItemToCart(title, price, imageSrc, id)
    //     updateCartTotal()
    // }

    // addItemToCart(title, price, imageSrc, id) {
    //     var cartRow = document.createElement('div')
    //     cartRow.classList.add('cart-row')
    //     cartRow.dataset.itemId = id
    //     var cartItems = document.getElementsByClassName('cart-items')[0]
    //     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    //     for (var i = 0; i < cartItemNames.length; i++) {
    //         if (cartItemNames[i].innerText == title) {
    //             alert('This item is already added to the cart')
    //             return
    //         }
    //     }
    //     var cartRowContents = `
    //         <div class="cart-item cart-column">
    //             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    //             <span class="cart-item-title">${title}</span>
    //         </div>
    //         <span class="cart-price cart-column">${price}</span>
    //         <div class="cart-quantity cart-column">
    //             <input class="cart-quantity-input" type="number" value="1">
    //             <button class="btn btn-danger" type="button">REMOVE</button>
    //         </div>`
    //     cartRow.innerHTML = cartRowContents
    //     cartItems.append(cartRow)
    //     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    //     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    // }

    // updateCartTotal() {
    //     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    //     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    //     var total = 0
    //     for (var i = 0; i < cartRows.length; i++) {
    //         var cartRow = cartRows[i]
    //         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    //         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    //         var price = parseFloat(priceElement.innerText.replace('$', ''))
    //         var quantity = quantityElement.value
    //         total = total + (price * quantity)
    //     }
    //     total = Math.round(total * 100) / 100
    //     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    // }





