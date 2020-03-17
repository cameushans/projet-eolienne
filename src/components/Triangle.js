import React from 'react'

function Triangle (props) {
    const drop = e =>{
        e.preventDefault();
        const id = e.dataTransfer.getData('triangle-id');
        
        const card = document.getElementsByClassName(id);

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >

            { props.children }
        
        </div>
    )
}

export default Triangle
