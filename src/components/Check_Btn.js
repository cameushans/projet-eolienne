import React, { Component } from 'react'

class Check_Btn extends React.Component {

    handleClick = (e) => {
        const pale_top_zone = document.getElementById("pale-top-zone");
        const pale_left_zone = document.getElementById("pale-left-zone");
        const pale_right_zone = document.getElementById("pale-right-zone");
        const mat_zone = document.getElementById("mat-zone");
        const rotor_zone = document.getElementById("rotor-zone");

        const elem = 
        rotor_zone.children.length == 2 && 
        mat_zone.children.length == 2 &&
        pale_top_zone.children.length == 2 && 
        pale_left_zone.children.length == 2 && 
        pale_right_zone.children.length == 2;
        
        if (elem) {
            alert('tout est bon')
        }
        else{
        return(
            alert('pas encore bon')
        )}
    }

    // const board = document.getElementById("board-1");
    // const elem =  board.children.length == 2;
    
    // if (elem) {
    //     alert('tout est bon')
    // }
    // else{
    // return(
    //     alert('pas encore bon')
    // )}

    render() {
        return (
          <button 
          onClick={this.handleClick}
          >
            Check !
          </button>
        );
    }
}

export default Check_Btn
