let narration = document.querySelector('.narration'),
    narrationBtn = document.querySelectorAll('.narration__btn'),
    questWrapper = document.querySelector('.questWrapper'),
    startBtn = document.querySelector('.startBtn');

let textArr = ["Начало квеста",
    "Второй элемент",
    "Третий элемент",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    ""];

/* startBtn.onclick = function () { //не работает
    startBtn.textContent = 'Далее';
    for (let i = 0; i < textArr.length; i++) {
        narration.textContent = textArr[i];
    }
}; */

/* for (let i = 0; i < textArr.length; i++) { //не работает
    startBtn.onclick = function () {
        narration.textContent = textArr[i];
    };
} */

/* startBtn.onclick = function () { //не работает
    narration.textContent = textArr[0];
};
 */
/* let i = 0; 
    while (i < textArr.length) { //не работает
        startBtn.onclick = function () {
            narration.textContent = textArr[i];
            i++;
        };
    } */

/* let i = 0;
startBtn.onclick = function () { //Работает, и никакой цикл не нужен, чё я так парился
    narration.textContent = textArr[i];
    i++;
    startBtn.textContent = 'Далее';
}; */

function scene() {
    let i = 0;
    startBtn.onclick = function () { //Работает, и никакой цикл не нужен, чё я так парился
        narration.textContent = textArr[i];
        i++;
        startBtn.textContent = 'Далее';
    };
}

scene();