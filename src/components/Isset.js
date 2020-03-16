import React, { Component } from 'react'

class Isset extends Component {
    render(){
        var elem1 = document.querySelectorAll(".card-mat");
        var elem2 = document.querySelectorAll(".card-triangle");
        var elem2 = document.querySelectorAll(".card-socle");

        return(
            function isset(elem1){
            if ( typeof( window[elem1] ) != "undefined" ) {
                 return alert("OK");
               }
            else {
                 return alert("Nope");
               }
            }
        )
    }
}

export default Isset
