
//Timer ES5
// Правильные подписки
var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}
//Вставляем 0 при num < 10
function addZero(num) {
    if (num <= 9) {
        num = '0' + num;
    }
    return num;
}

function timerLeft(year,month,day) {
    setInterval(function () {
        // Объявляем переменные
        var hoursLeft = document.getElementById('timerHour'),
            hoursText = document.getElementById('timerHourText'),
            minutesLeft = document.getElementById('timerMinute'),
            minutesText = document.getElementById('timerMinuteText'),
            secLeft = document.getElementById('timerSecond'),
            secText = document.getElementById('timerSecondText'),
            dateNow = new Date().getTime(),
            dateFinish = new Date(year,month,day),
            sec = Math.floor((dateFinish - dateNow) / 1000),
            secToMinutes = sec % 3600,
            hoursNumber = Math.floor(sec / 3600),
            minutesNumber = Math.floor(secToMinutes / 60),
            secondsNumber = secToMinutes % 60;

    //Вставляем значения даты
            hoursLeft.innerHTML = addZero(hoursNumber);
            minutesLeft.innerHTML = addZero(minutesNumber);
            secLeft.innerHTML = addZero(secondsNumber);
    //Вставляем текст под дату
            hoursText.innerHTML = decOfNum(hoursNumber, ['час', 'часа', 'часов']);
        minutesText.innerHTML = decOfNum(minutesNumber, ['минута', 'минуты', 'минут']);
        secText.innerHTML = decOfNum(secondsNumber, ['секунда', 'секунды', 'секунд ']);

    }, 400)
}

//Запускаем нашу функцию
timerLeft(2019, 4, 17);