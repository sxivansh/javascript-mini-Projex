const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setData(){

    // console.log(Date);
    
   const now = new Date();// this is how you get new dates
   const seconds = now.getSeconds(); // this is how you get the seconds
   const secondDegrees = ((seconds/60)* 360) + 90;
   secondHand.style.transform = `rotate(${secondDegrees}deg)`
//    console.log(seconds);
   const mins = now.getMinutes();
   const minsDegrees = ((mins/60)* 360) +90;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;
//    console.log(mins);
const hours = now.getMinutes();
const hoursDegrees = ((hours/12)* 360) + 90;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
   
   
    
}
setInterval(setData, 1000);