

// ---------------CLOCK-----

    function addZero(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    function current_date() {
        let current_datetime = new Date();
        let day = addZero(current_datetime.getDate());
        let month = addZero(current_datetime.getMonth()+1);
        let year = current_datetime.getFullYear();
        return day+"."+month+"."+year;
    }

    function current_time() {
        let current_datetime = new Date();
        let hoursClocl = addZero(current_datetime.getHours());
        let minutesClock = addZero(current_datetime.getMinutes());
        let secondsClock = addZero(current_datetime.getSeconds());
        return hoursClocl+":"+minutesClock+":"+secondsClock;
    }

    document.querySelector('.clock__carrentData').innerHTML = current_date();

    setInterval(function() {
        document.querySelector('.clock__carrentTime').innerHTML = current_time();
    }, 1000);

// ------------STOPWATCH--------

const stopwatch = document.querySelector('.stopwatch__menu_time');
const stopwatchButtons = document.querySelectorAll('.stopwatch-buttons_item');

// Buttons
const startButton = document.querySelector('.stopwatch-start');
const loopButton = document.querySelector('.stopwatch-loop');
const stopButton = document.querySelector('.stopwatch-stop');
const resetButton = document.querySelector('.stopwatch-reset');

//Variables
let hourStopwatch = 00,
    minuteStopwatch = 00,
    secondStopwatch = 00,
    // millisecond = 000,
    interval;

//Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTime, 1000);
});

loopButton.addEventListener('click', () => {
    // clearInterval(interval);
    let loopResults = document.querySelector('.stopwatch__scoreboard');
    let p = document.createElement('p');
    p.innerText = addZero(hourStopwatch)+ ":" + addZero(minuteStopwatch) + ":" + addZero(secondStopwatch);
    loopResults.append(p);
});


stopButton.addEventListener('click', () => {
    clearInterval(interval);
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    hourStopwatch = 00;
    minuteStopwatch = 00;
    secondStopwatch = 00;
    stopwatch.textContent = "00:00:00";
    let loopResults = document.querySelector('.stopwatch__scoreboard').innerHTML = '';
});

function startTime() {
    // millisecond++;
    // if (millisecond > 999) {
    //     second++;
    //     millisecond = 0;
        secondStopwatch++;
        if (secondStopwatch > 59) {
            minuteStopwatch++;
            secondStopwatch = 0;

            if (minuteStopwatch > 59) {
                hourStopwatch++;
                minuteStopwatch = 0;
            }
        }
    // }
    stopwatch.textContent = addZero(hourStopwatch)+ ":" + addZero(minuteStopwatch) + ":" + addZero(secondStopwatch);
}

stopwatchButtons.forEach(button => {
    button.addEventListener('click', function () {
        stopwatchButtons.forEach(btn => btn.classList.remove('activeStopwatch'));
        this.classList.add('activeStopwatch');
        
    });
});


// ------------TIMER--------

const timerInputNumber = document.querySelector('.timer__input_number');
const timerout = document.querySelector('.timer__menu_time');
const TimerButtons = document.querySelectorAll('.timer-buttons_item');
const TimerInputBattons = document.querySelectorAll('.timer__input_button');

// Buttons
const timerMinus = document.querySelector('.timer-minus'),
    timerPlus = document.querySelector('.timer-plus'),
    startTimer = document.querySelector('.timer-start'),
    stopTimer = document.querySelector('.timer-stop'),
    resetTimer = document.querySelector('.timer-reset');

//Variables
let intervalTimer,
    timeoutTimer,
    minutesTimer,
    secondsTimer = 60;

//Listeners
    timerMinus.addEventListener('click', () => {
        timerInputNumber.stepDown(1); 
    });

    timerPlus.addEventListener('click', () => {
        timerInputNumber.stepUp(1); 
    });

    startTimer.addEventListener('click', () => {
        timeoutTimer = document.querySelector('.timer__input_number').value;
        minutesTimer = timeoutTimer-1;
        secondsTimer = 60;
        intervalTimer = setInterval(CountTime, 1000);
    });
    
    stopTimer.addEventListener('click', () => {
        clearInterval(intervalTimer);
    });
    
    resetTimer.addEventListener('click', () => {
        clearInterval(intervalTimer);
        hourStopwatch = 00;
        minutesTimer = 00;
        secondsTimer = 00;
        timerout.textContent = "00:00";
    });

function CountTime () {
    if ((minutesTimer == 0)&&(secondsTimer == 0)) {
        minutesTimer = 0;
        secondsTimer = 0;
    }
    else {
        secondsTimer--; 
        if (secondsTimer < 0) {
            minutesTimer--;
            secondsTimer = 59;
        }
    }
    timerout.innerHTML = addZero(minutesTimer)+ ":" + addZero(secondsTimer);
}

TimerButtons.forEach(button => {
    button.addEventListener('click', function () {
        TimerButtons.forEach(btn => btn.classList.remove('activeOutTimer'));
        this.classList.add('activeOutTimer');
    });
});

TimerInputBattons.forEach(button => {
    button.addEventListener('click', function () {
        TimerInputBattons.forEach(btn => btn.classList.remove('activeInputTimer'));
        this.classList.add('activeInputTimer');
    });
});

document.onclick = function(e){
    if ( e.target.classList.contains('activeStopwatch') == false) {
        stopwatchButtons.forEach(btn => btn.classList.remove('activeStopwatch'));
    }
    if ( e.target.classList.contains('activeOutTimer') == false) {
        TimerButtons.forEach(btn => btn.classList.remove('activeOutTimer'));
    }
    if ( e.target.classList.contains('activeInputTimer') == false) {
        TimerInputBattons.forEach(btn => btn.classList.remove('activeInputTimer'));
    }
};

