import React, { Component } from 'react'

function Stop_Btn () {
    // document.body.style.backgroundColor = "black"

    const pale_top_zone = document.getElementById("pale-top-zone");
    const rotor_zone = document.getElementById("rotor-zone");
    const pale_zone = document.getElementById("pale-zone")
    
    if (true) {
        console.log("stopage de l'animation")
        rotor_zone.classList.remove("turn_up")
        pale_zone.classList.remove("turn_up",)
        pale_top_zone.classList.remove("turn_up")
        
        // pale_left_zone.classList.add("turn_up", "deplacement_left")
        // pale_right_zone.classList.add("turn_up", "deplacement_right")
    }
}

export default Stop_Btn
