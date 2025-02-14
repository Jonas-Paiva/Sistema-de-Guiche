

let currentNumberGlobal = 0;
let currentNumberPriorid = 0;

//Senhas normais seta para cima
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        let passNumber = document.getElementById("pass-number");
        currentNumberGlobal = currentNumberGlobal + 1;
        passNumber.textContent = currentNumberGlobal;
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


//reseta os contadores
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
    let guicheNumber = parseInt(event.key)
    if (guicheNumber >= 0  ) {

        let guicheNumber = document.getElementById("guiche-number");
        let onlyNumber = parseInt(event.key);
        
        if( onlyNumber >= 0){
            guicheNumber.textContent = onlyNumber;
        }

        let audio = document.getElementById("digdong");
        audio.currentTime = 0;  // Reinicia o som caso já esteja tocando
        audio.play();
    }
});