function getTime(){

    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()


    if(hours > 12){
        hours = hours - 12
        document.querySelector('#twelve_hours_past').innerText = 'PM'
    }else{
        document.querySelector('#twelve_hours_past').innerText = 'AM'
    }

    if(hours <12){
        document.querySelector('.greet').innerText = 'Good Night'
    }else{
        document.querySelector('.greet').innerText = 'Good Morning'
    }

 
    
    if(hours < 10){
        hours = '0' + hours
    } else if (minutes < 10){
        minutes = '0' + minutes
    } else if (seconds < 10){
        seconds = '0' + seconds
    }else{

    }

    document.querySelector('#hour_hand').innerText = hours;
    document.querySelector('#minute_hand').innerText = minutes;
    document.querySelector('#second_hand').innerText = seconds;

}

setInterval(getTime, 1000)

