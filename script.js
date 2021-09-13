console.log("Hi");
let dt = new Date();
console.log(dt);


function updateTime(){
    let hr = dt.getHours();
    let hour = document.getElementById('hour');
    if (hr>12) {
        hour.innerHTML = hr-12;
    }

    let min = dt.getMinutes();
    let minute = document.getElementById('minute');
    minute.innerHTML = ":"+min;
   
    let sec = dt.getSeconds();
    let second = document.getElementById('second');
    second.innerHTML = ":"+sec;

    
    let mth = dt.getMonth();
    let month = document.getElementById('month');
    if (mth == 0) {
        month.innerHTML = "Jan";
    }
    if (mth == 1) {
        month.innerHTML = "Feb";
    }
    if (mth == 2) {
        month.innerHTML = "Mar";
    } 
    
    if (mth == 3) {
        month.innerHTML = "Apr";
    }
    if (mth == 4) {
        month.innerHTML = "May";
    }
    if (mth == 5) {
        month.innerHTML = "Jun";
    }
    if (mth == 6) {
        month.innerHTML = "Jul";
    }
    if (mth == 7) {
        month.innerHTML = "Aug";
    }
    if (mth == 8) {
        month.innerHTML = "Sep";
    }
    if (mth == 9) {
        month.innerHTML = "Oct";
    }
    if (mth == 10) {
        month.innerHTML = "Nov";
    }
    if (mth == 11) {
        month.innerHTML = "Dec";
    }
    let dat = dt.getDate();
    let date = document.getElementById('date');
    date.innerHTML = "-"+dat+"-";
    
    let dy = dt.getDay();
    let day = document.getElementById('day');
    if(dy==1){
        day.innerHTML="Mon";
    }
    if(dy==2){
        day.innerHTML="Tue";
    }
    if(dy==3){
        day.innerHTML="wed";
    }
    if(dy==4){
        day.innerHTML="Thur";
    }
    if(dy==5){
        day.innerHTML="Fri";
    }
    if(dy==6){
        day.innerHTML="Sat";
    }
    if(dy==7){
        day.innerHTML="Sun";
    }
    let yr = dt.getFullYear();
    let year = document.getElementById('year');
    year.innerHTML = "-"+yr;
}
setInterval(updateTime,1000);
console.log("-------Program Complete---------")

    
    
