const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr<10) hr = "0"+hr;
    if(mn<10) mn = "0"+mn;
    if(s<10) s = "0"+s;
    hours.textContent= hr;
    minutes.textContent = mn;
    seconds.textContent = s;
})