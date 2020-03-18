import React from 'react'

function Board (props) {
    const drop = e =>{
        e.preventDefault();
        const draggableElementData  = e.dataTransfer.getData('text');
        const droppableElementData = e.target.getAttribute("dataBrand");
        const isCorrectMatching = draggableElementData===droppableElementData;
        
        if(isCorrectMatching) {
            // const draggableElement = document.getElementById(draggableElementData);
            // e.target.classList.add("dropped");
            // e.target.style.backgroundColor = draggableElement.style.color = "green"; // This approach works only for inline styles. A more general approach would be the following: 

            e.target.style.border = "solid"


            // // e.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
            // draggableElement.classList.add("dragged");
            // draggableElement.setAttribute("draggable", "false");
            // e.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
            e.target.insertAdjacentHTML("afterbegin", `<div class="matching">👌</div>`);


            
            console.log('bonne items')
        }
        else{
            console.log('pas le bonne items')
            const draggableElement = document.getElementById(draggableElementData);
            // e.target.style.backgroundColor = draggableElement.style.color = "red";
            e.target.insertAdjacentHTML("afterbegin", `<div class="matching">❌</div>`);
            // e.target.style.display = "none";
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
