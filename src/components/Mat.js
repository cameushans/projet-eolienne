import React from 'react'

function Mat (props) {
    const drop = e =>{
        e.preventDefault();
        const mat = e.dataTransfer.getData('board-mat');
        


        const card = document.getElementsByClassName(mat);
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

export default Mat
