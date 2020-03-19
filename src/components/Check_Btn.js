import React, { Component } from 'react'

function Check_Btn (e) {
    const pale_top_zone = document.getElementById("pale-top-zone");
    const pale_left_zone = document.getElementById("pale-left-zone");
    const pale_right_zone = document.getElementById("pale-right-zone");
    const mat_zone = document.getElementById("mat-zone");
    const rotor_zone = document.getElementById("rotor-zone");
    const pale_zone = document.getElementById("pale-zone")


    const elem = 
    rotor_zone.children.length == 1 && 
    mat_zone.children.length == 1 &&
    pale_top_zone.children.length == 1 && 
    pale_left_zone.children.length == 1 && 
    pale_right_zone.children.length == 1;
    
    if (elem) {
        console.log('tout est bon')
        rotor_zone.classList.add("turn_up",)
        pale_zone.classList.add("turn_up",)
        pale_top_zone.classList.add("turn_up","deplacement_top")
        mat_zone.classList.add("deplacement_mat",)
        // pale_left_zone.classList.add("turn_up", "deplacement_left")
        // pale_right_zone.classList.add("turn_up", "deplacement_right")
    }
    else{
    return(
        alert('pas encore bon')
    )}

}

export default Check_Btn
