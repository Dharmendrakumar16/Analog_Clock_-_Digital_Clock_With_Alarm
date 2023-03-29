let hr = document.querySelector('#hr')
let mn = document.querySelector('#mn')
let sc = document.querySelector('#sc')

setInterval(() => {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

    // Digital clock
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // conver 24hours clock to 12hours clock
    if (h > 12) {
        h = h - 12;
    }

    // add zero before singal digit number
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    if (alarmTime == `${hours.innerHTML = h}:${minutes.innerHTML = m} ${ampm.innerHTML = am}`) {
        ringtone.play();
        ringtone.loop = "true";
    }
})

const selectMenu = document.querySelectorAll("select");
const setAlarmbtn = document.querySelector("button");
const content = document.querySelector(".content");

let alarmTime;
let isAlarmSet = false;
ringtone = new Audio('wakeup-alarm-tone.mp3');

console.log(selectMenu);

for (i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}"> ${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}"> ${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}"> ${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = ""
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmbtn.innerText = "Set Alarm";
        isAlarmSet = false;

        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please enter a valid time to set an alarm!!!..")
    }
    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    setAlarmbtn.innerText = "Clear Alarm";
}


setAlarmbtn.addEventListener("click", setAlarm);