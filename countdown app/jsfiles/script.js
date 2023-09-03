
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');




const targetDate = "12 Dec 2023";

function countdown(){
    const birthDayDate = new Date(targetDate);
    const currentDate =  new Date();
    const totalSeconds = (birthDayDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    // console.log(days,hours,minutes,seconds);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML  = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

  
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}


//set interval
countdown();

setInterval(countdown, 1000);

// const countdown = setInterval(function() {
//    const currentDate = new Date().getTime();
//    const timeRemaining = targetDate - currentDate;
    

//    const days = Math.floor(timeRemaining/(1000*60*60*24));
//    const hours = Math.floor((timeRemaining%(1000*60*60*24))/ (1000*60*60));
//    const minutes = Math.floor((timeRemaining % (1000*60*60))/(1000*60));
//    const seconds = Math.floor((timeRemaining % (1000*60))/1000);

//    document.querySelector('.days-c').innerHTML = days + 'd';
//    document.querySelector('.hours-c').innerHTML = hours + 'h';
//    document.querySelector('.minutes-c').innerHTML = minutes + 'm';
//    document.querySelector('.seconds-c').innerHTML = seconds + 's';


//    //check if the countdown has eneded

//    if(timeRemaining<=0){
//     clearInterval(countdown);
//     document.querySelector('.countdown-container').innerHTML = 'countdown expired';

//    }

// }, 1000);