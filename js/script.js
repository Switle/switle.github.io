let narration = document.querySelector('.narration'),
    narrationBtn = document.querySelectorAll('.narration__btn'),
    questWrapper = document.querySelector('.questWrapper'),
    startBtn = document.querySelector('.startBtn'),
    backBtn = document.querySelector('.backBtn'),
    returnBtn = document.querySelector('.returnBtn');

let textArr = ["Начало квеста",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"];

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
        i++;
        narration.textContent = textArr[i];
        startBtn.textContent = 'Далее';
        console.log(i);
        if (i >= 1) {
            backBtn.style.display = 'block';
        }
        if (i >= textArr.length) {
            startBtn.style.display = 'none';
        }
        if (i >= textArr.length) {
            returnBtn.style.display = 'block';
            narration.textContent = 'Конец';
        }

    };

    backBtn.onclick = function () {
        i--;
        narration.textContent = textArr[i];
        console.log(i);
        if (i < 1) {
            backBtn.style.display = 'none';
            startBtn.textContent = 'Старт';
        }
        if (i <= textArr.length) {
            startBtn.style.display = 'block';
        }
    };

    returnBtn.onclick = function () {
        i = 0;
        narration.textContent = textArr[i];
        console.log(i);
        if (i < 1) {
            returnBtn.style.display = 'none';
            backBtn.style.display = 'none';
            startBtn.style.display = 'block';
            startBtn.textContent = 'Старт';
        }
    };
}

scene();