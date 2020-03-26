import React from 'react'

function Card(props) {
    const dragStart = e => {
        // console.log(e)
        // console.log(e.target.id)
        e.dataTransfer.setData('text', e.target.id);
        
        
        // setTimeout(() => {
        //     target.style.display = "none";
        // }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    } 

    const dragLeave = e => {
        e.stopPropagation();
        e.target.style.display = "block";
    }

     
    return (
        <div
        id={props.id}
        className={props.className}
        style={props.style}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        >
            { props.children }
        </div>
    )
}

export default Card
