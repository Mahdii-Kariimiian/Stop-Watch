const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
let alarmTime , alarmState = 'noset';
const ringtone = new Audio('/sound/alarm-clock.mp3');
const content = document.querySelector('.content');
const img = document.querySelector("img")
// filling hour numbers
for(let i = 23 ; i>=0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option);
};
// filling minute numbers
for (let i = 59 ; i>=0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option);
};
// Current time
setInterval (() =>{
   let date = new Date();
   let h = date.getHours();
   h = h < 10 ? '0' + h : h;
   let m = date.getMinutes();
   m = m < 10 ? '0' + m : m;
   let s = date.getSeconds();
   s = s < 10 ? '0' + s : s;

    timeBox.innerHTML = `${h} : ${m} : ${s}`;
    if (alarmTime == `${h} : ${m}`) {
        ringtone.play();
        ringtone.loop = true; 
        img.classList.add("animation")
    }
}, 1000)

// Set alarm 
setAlarmBtn.addEventListener('click', () => {
    alarmTime = `${selectMenu[0].value} : ${selectMenu[1].value}`;
    if (alarmTime.includes('hour') || alarmTime.includes('minute')) {
        if (alarmTime.includes('hour')) { 
            selectMenu[0].style.border = "1px solid red"
        } else{
            selectMenu[0].style.border = "1px solid grey"
        }
        if (alarmTime.includes('minute')) {
            selectMenu[1].style.border = "1px solid red"
        }else{
            selectMenu[1].style.border = "1px solid grey"
        }

    } else {
        selectMenu[1].style.border = "1px solid grey"
        selectMenu[0].style.border = "1px solid grey"
        checkstate(alarmState);
    }
}) 
// Check State of Button
function checkstate(state) {
    if (state == 'noset') {
        content.classList.add('disabled')
        setAlarmBtn.innerText = 'Clear Alaram'
        alarmState = 'set';
    } else {
        content.classList.remove('disabled')
        alarmTime = '';
        ringtone.pause();
        setAlarmBtn.innerText = 'Set Alarm'
        alarmState = 'noset';
        img.classList.remove("animation")
        ringtone.currentTime = 0;
    }
}