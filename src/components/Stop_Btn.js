function Stop_Btn () {
    const pale_top_zone = document.getElementById("pale-top-zone");
    const rotor_zone = document.getElementById("rotor-zone");
    const pale_zone = document.getElementById("pale-zone")
    const mat_zone = document.getElementById("mat-zone");

    const board1 = document.getElementById("board-1")
    const board2 = document.getElementById("board-3")

    const achat = document.getElementById("achat");

    if (true) {
        console.log("stopage de l'animation")
        document.body.classList.remove("final-test")

        achat.classList.add("display")

        board1.classList.remove("hidden")
        board2.classList.remove("hidden")

        rotor_zone.classList.remove("turn_up")
        pale_zone.classList.remove("turn_up",)
        pale_top_zone.classList.remove("turn_up", "deplacement_top")
        mat_zone.classList.remove("deplacement_mat")
    }
}

export default Stop_Btn
