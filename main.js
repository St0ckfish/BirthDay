/********* vars **********/

var cyearr = new Date().getFullYear();
let iyear = document.querySelector("#year");
let imonth = document.querySelector("#month");
let iday = document.querySelector("#day");
let iname = document.querySelector("#namee");
const d = new Date();
let monthh = d.getMonth();

/********* on click buttons **********/

document.querySelector("#nextbirth").addEventListener("click", () => {
  // console.log(days);
  
  document.querySelector("#birth").style.visibility = "visible";
  document.querySelector(".container").style.visibility = "hidden";
  document.querySelector(".Birthday").style.visibility = "hidden";
  document.querySelector("#nextyear").style.visibility = "hidden";
});

/********* on click buttons **********/

document.querySelector("#nextyear").addEventListener("click", () => {
  // console.log(days);

  document.querySelector("#nextbirth").style.visibility = "hidden";
  document.querySelector("#birth").style.visibility = "hidden";
  document.querySelector(".container").style.visibility = "visible";
  document.querySelector(".Birthday h1").innerHTML = `${cyearr+1}`;
  document.querySelector(".Birthday").style.visibility = "visible";



const currentYear = new Date().getFullYear();
const countToDate = new Date(`1 1 ${currentYear + 1} 00:00:00`);


let previousTimeBetweenDates;
setInterval(() => {
  
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {

  

    const days = Math.floor(time / 24 / 60 / 60);
    const hours = Math.floor(time / 60 / 60) % 24;
    const minutes = Math.floor(time / 60 ) % 60;
    const seconds = (Math.floor(time ) % 60);


  flip(document.querySelector("[data-days-hundred]"), Math.floor(days/100));
  flip(document.querySelector("[data-days-tens]"), Math.floor(days/10));
  flip(document.querySelector("[data-days-ones]"), days%10);
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours/10));
  flip(document.querySelector("[data-hours-ones]"), hours%10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes/10));
  flip(document.querySelector("[data-minutes-ones]"), minutes%10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds/10));
  flip(document.querySelector("[data-seconds-ones]"), seconds%10);
}
  
});

/********* on click buttons **********/

document.querySelector("#submit").addEventListener("click", () => {
  
  if (iname.value === "")
  document.querySelector("#req0").style.visibility = "visible";
else document.querySelector("#req0").style.visibility = "hidden";
if (iday.value === "")
document.querySelector("#req1").style.visibility = "visible";
else document.querySelector("#req1").style.visibility = "hidden";
if (imonth.value === "")
document.querySelector("#req2").style.visibility = "visible";
else document.querySelector("#req2").style.visibility = "hidden";
if (iyear.value === "")
document.querySelector("#req3").style.visibility = "visible";
else document.querySelector("#req3").style.visibility = "hidden";

if (iday.value != "" && imonth.value != "" && iyear.value != "" && iname.value != "") {
  document.querySelector("#nextbirth").style.visibility = "hidden";
  document.querySelector("#birth").style.visibility = "hidden";
  let targetyear = document.querySelector("#year").value;
  document.querySelector(".Birthday h1").innerHTML = `Hi ${iname.value}, Until Your ${
    cyearr + 1 - targetyear
  }st Birthday!`;
  document.querySelector(".Birthday").style.visibility = "visible";
  document.querySelector(".container").style.visibility = "visible";
  
  
  //*******
  const currentYear = new Date().getFullYear();
  var countToDate = new Date(`${Number(imonth.value)} ${Number(iday.value)} ${currentYear + 1} 00:00:00`);
  if(imonth.value>=monthh+1){
    countToDate = new Date(`${Number(imonth.value)} ${Number(iday.value)} ${currentYear } 00:00:00`);
  }
  else{
    var countToDate = new Date(`${Number(imonth.value)} ${Number(iday.value)} ${currentYear + 1} 00:00:00`);
    
  }
  
  
  let previousTimeBetweenDates;
  setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
    flipAllCards(timeBetweenDates);
    
    previousTimeBetweenDates = timeBetweenDates;
  }, 250);
  
  function flipAllCards(time) {
    
    
    
    // console.log(days);
    const days = Math.floor(time / 24 / 60 / 60);
    const hours = Math.floor(time / 60 / 60) % 24;
    const minutes = Math.floor(time / 60 ) % 60;
    const seconds = (Math.floor(time ) % 60);
    
    
    flip(document.querySelector("[data-days-hundred]"), Math.floor(days/100));
  flip(document.querySelector("[data-days-tens]"), Math.floor(days/10));
  flip(document.querySelector("[data-days-ones]"), days%10);
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours/10));
  flip(document.querySelector("[data-hours-ones]"), hours%10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes/10));
  flip(document.querySelector("[data-minutes-ones]"), minutes%10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds/10));
  flip(document.querySelector("[data-seconds-ones]"), seconds%10);
}
    // *******

  }

});


/*******animation*******/


function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  top.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}




