import React from 'react'

function Board (props) {
    const drop = e =>{
        e.preventDefault();
        const draggableElementData  = e.dataTransfer.getData('text');
        const droppableElementData = e.target.getAttribute("dataBrand");
        const isCorrectMatching = draggableElementData===droppableElementData;
        
        if(isCorrectMatching) {
            console.log('bonne items')
            const draggableElement = document.getElementById(draggableElementData);
            draggableElement.classList.remove("matching_false");
            draggableElement.classList.add("matching_true");
            e.target.style.border = "solid"
        }

        else{
            console.log('pas le bonne items')
            const draggableElement = document.getElementById(draggableElementData);
            draggableElement.classList.add("matching_false");
        }

        const card = document.getElementById(draggableElementData);
        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.id}
            dataBrand={props.dataBrand}            
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >

            { props.children }
        
        </div>
    )
}

export default Board
