import React, { Component } from 'react'

class Combinaison extends Component {
    render(){
        // var triangle = document.querySelector("#card-1");
        // var mat = document.querySelector("#card-13");
        // var socle = document.querySelector("#card-10");
        
        // if (triangle < 12 && mat < 12 && socle < 12) {
        // return(
        //     <span className="ok">parfait</span>
        // )
        // }
        // else{
        // return(
        //     <span className="not-ok">stop</span>
        // )}

        var triangle_zone = document.getElementById("board-4");
        var mat_zone = document.getElementById("board-5");
        var socle_zone = document.getElementById("board-6");
        
        if (triangle_zone.children.length == 1 && mat_zone.children.length == 1 && socle_zone.children.length == 1) {
        return(
            <span className="ok">parfait</span>
        )
        }
        else{
        return(
            <span className="not-ok">stop</span>
        )}
    }
}

export default Combinaison
