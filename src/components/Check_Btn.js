function Check_Btn (e) {
    const pale_top_zone = document.getElementById("pale-top-zone");
    const pale_left_zone = document.getElementById("pale-left-zone");
    const pale_right_zone = document.getElementById("pale-right-zone");
    const mat_zone = document.getElementById("mat-zone");
    const rotor_zone = document.getElementById("rotor-zone");
    const pale_zone = document.getElementById("pale-zone")

    const board1 = document.getElementById("board-1")
    const board2 = document.getElementById("board-3")

    const achat = document.getElementById("achat");

    const elem = 
    rotor_zone.children.length === 1 && 
    mat_zone.children.length === 1 &&
    pale_top_zone.children.length === 1 && 
    pale_left_zone.children.length === 1 && 
    pale_right_zone.children.length === 1;
    
    if (elem) {
        console.log('tout est bon')

        // document.body.style.backgroundImage = "url(" + { Background } + ")"
        document.body.classList.add("final-test")

        achat.classList.remove("display")
        
        board1.classList.add("hidden")
        board2.classList.add("hidden")

        rotor_zone.classList.add("turn_up",)
        pale_zone.classList.add("turn_up",)
        pale_top_zone.classList.add("turn_up","deplacement_top")
        mat_zone.classList.add("deplacement_mat")

    }
    else{
    return(
        alert("tu n'a pas compléter l'éolienne !")
    )}

}

export default Check_Btn

 
    // board1.style.display = "none"
    // board2.style.display = "none"
    
    // pale_top_zone.style.display = "block"
    // pale_left_zone.style.display = "block"
    // pale_right_zone.style.display = "block"
    // mat_zone.style.display = "block"
    // pale_zone.style.display = "block"
    
    // pale_left_zone.classList.add("deplacement_left")
    // pale_right_zone.classList.add("deplacement_right")