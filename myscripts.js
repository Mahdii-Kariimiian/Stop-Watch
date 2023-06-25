let clockEl = document.getElementById("clock-el");
let miliEl = document.getElementById("mili-el");
let secondEl = document.getElementById("second-el");
let minEl = document.getElementById("minute-el");
let hoursEl = document.getElementById("hours-el");
let startEl = document.getElementById("start-el")
let stoptEl = document.getElementById("stop-el")
let resetEl = document.getElementById("reset-el")
let miliCount = 0;
let minCount = 0;
let secondCount = 0;
let hoursCount = 0;



startEl.addEventListener("click", function() {
    
    let countmiliseconds = setInterval(miliseconds, 10) ;

    function miliseconds () {
        miliCount ++ ;
        if ( miliCount < 10) {
            miliEl.innerText = "0" + miliCount;
        } else if (miliCount > 9 && miliCount < 99) {
            miliEl.innerText = miliCount;
        } else  {miliCount=0; }  
    }

    let countseconds = setInterval(seconds, 1000) ;

    function seconds () {
        secondCount ++ ;
        if ( secondCount < 10) {
            secondEl.innerText = "0" + secondCount;
        } else {
            secondEl.innerText = secondCount;
        }
        if (secondCount >= 59 ) {
            secondCount=0;
        }  
    }

    let countmins = setInterval(minutes, 6000) ;

    function minutes () {
        minCount ++ ;
        if ( minCount < 10) {
            minEl.innerText = "0" + minCount;
        } else {
            minEl.innerText = minCount;
        }
        if (minCount >= 59 ) {
            minCount=0;
        }  
    }

    let counthours = setInterval(hours, 360000) ;

    function hours () {
        hoursCount ++ ;
        if ( hoursCount < 10) {
            hoursEl.innerText = "0" + hoursCount;
        } else {
            hoursEl.innerText = hoursCount;
        }
        if (hoursCount >= 59 ) {
            hoursCount=0;
        }  
    } 

    stoptEl.addEventListener ("click", function() {
        clearInterval(countmiliseconds)
        clearInterval(countseconds)
        clearInterval(countmins)
        clearInterval(counthours)
    }); 

    resetEl.addEventListener ("click", function() {
        clearInterval(countmiliseconds)
        clearInterval(countseconds)
        clearInterval(countmins)
        clearInterval(counthours)
        hoursEl.textContent = "00"
        secondEl.textContent = "00"
        minEl.textContent = "00"
        miliEl.textContent = "00"
        miliCount = 0;
        minCount = 0;
        secondCount = 0;
        hoursCount = 0;
    });

});

