const monthel = document.getElementById("month");
const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minel = document.getElementById("min");
const secondsel = document.getElementById("seconds");

const newyear = '19 Sep 2020';

function count(){
    const newyeardate= new Date(newyear);
    const currentdate= new Date();

    const totalseconds = (newyeardate - currentdate) / 1000;
    
    const month =Math.floor(totalseconds /3600 / 24 / 30)  ;
    const days = Math.floor(totalseconds / 3600 / 24) ;
    const hours= Math.floor(totalseconds / 3600) % 24;
    const min = Math.floor(totalseconds / 60) % 60;
    const second= Math.floor(totalseconds) % 60;
    
    monthel.innerHTML=format_time(month);
    daysel.innerHTML = format_time(days);
    hoursel.innerHTML = format_time(hours);
    minel.innerHTML = format_time(min);
    secondsel.innerHTML = format_time(second);
        
        
}

function format_time(time){
    return time < 10 ? `0${time}` : time;
}

count();

setInterval(count,1000)