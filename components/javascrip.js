let currentNumberGlobal = 0;
let currentNumberPriorid = 0;

//Senhas normais seta para cima
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        let passNumber = document.getElementById("pass-number");
        currentNumberGlobal = currentNumberGlobal + 1;
        passNumber.textContent = `N${currentNumberGlobal}`;
    }
});


// Senhas para prioridade, seta para direita
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        let passNumber = document.getElementById("pass-number");
        currentNumberPriorid = currentNumberPriorid + 1;
        passNumber.textContent = `P${currentNumberPriorid}`;
    }
});


//reset os contadores
document.addEventListener("keydown", function(event) {
    if (event.key === "r") {
        let passNumber = document.getElementById("pass-number");
        currentNumberGlobal = 0;
        currentNumberPriorid = 0;
        passNumber.textContent = 0;
    }
});


//Seleciona o guichê
document.addEventListener("keydown", function(event) {
    let NumberKey = parseInt(event.key)
    if (NumberKey > 0  ){
        let guicheNumber = document.getElementById("guiche-number");
            guicheNumber.textContent = NumberKey;

        let audio = document.getElementById("digdong");
        audio.currentTime = 0; // Reinicia o som caso já esteja tocando
        audio.play();
    }
});