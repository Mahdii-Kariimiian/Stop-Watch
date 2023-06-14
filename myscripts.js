let startEl = document.getElementById("start-el")
let stopEl = document.getElementById("stop-el")
let resetEl = document.getElementById("reset-el") 
let clockEl = document.getElementById("clock-el")
let secondEL = document.getElementById("second-el")
let count = 0;
let clearWatch;

startEl.addEventListener("click", function() {
    clearWatch = setInterval( function() {
            count++;
            secondEL.textContent = count;
    },1000 )
});

stopEl.addEventListener("click", function() {
    clearInterval(clearWatch);
});

resetEl.addEventListener("click", function() {
    clockEl.textContent = "reset"
})
