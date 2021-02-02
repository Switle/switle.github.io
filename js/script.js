let narration = document.querySelector('.narration'),
    questWrapper = document.querySelector('.questWrapper'),
    startBtn = document.querySelector('.startBtn'),
    backBtn = document.querySelector('.backBtn'),
    returnBtn = document.querySelector('.returnBtn');

function createChoices() {

    let choiceWrapper = document.createElement('div'),
        choice1 = document.createElement('div'),
        choice2 = document.createElement('div'),
        choice3 = document.createElement('div');

    choiceWrapper.classList.add('choiceWrapper');
    choice1.classList.add('choice1');
    choice2.classList.add('choice2');
    choice3.classList.add('choice3');

    narration.appendChild(choiceWrapper);
    choiceWrapper.appendChild(choice1);
    choiceWrapper.appendChild(choice2);
    choiceWrapper.appendChild(choice3);

    choice1.textContent = '111111111111111';
    choice2.textContent = '222222222222222';
    choice3.textContent = '333333333333333';
}

let opening = ["Начало квеста",
    "Кнопки должны зеленеть при нажатии",
    "В конце должны появиться 3 варианта выбора",
    "Пока они просто забиты цифрами",
    "При наведении они должны краснеть",
    "А при нажатии зеленеть",];

let storyline2 = ["Начало квеста",
    "1",
    "2",
    "3",
    "4",
    "5",];

let storyline3 = ["Начало квеста",
    "1",
    "2",
    "3",
    "4",
    "5",];

let storyline = opening;

let textArr = storyline;

let lgth = storyline.length;

textArr.length = lgth;

function control() {
    let i = 0;
    let a = 0;
    startBtn.onclick = function () {
        i++;
        a++;
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
        if (a == textArr.length) {
            createChoices();
        }
    };

    backBtn.onclick = function () {
        i--;
        a--;
        narration.textContent = textArr[i];
        console.log(i);
        if (i < 1) {
            backBtn.style.display = 'none';
            startBtn.textContent = 'Старт';
        }
        if (i <= textArr.length) {
            startBtn.style.display = 'block';
            returnBtn.style.display = 'none';
        }

    };

    returnBtn.onclick = function () {
        i = 0;
        a = 0;
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

control();