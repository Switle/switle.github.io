let narration = document.querySelector('.narration'),
    questWrapper = document.querySelector('.questWrapper'),
    startBtn = document.querySelector('.startBtn'),
    nextBtn = document.querySelector('.nextBtn'),
    backBtn = document.querySelector('.backBtn'),
    returnBtn = document.querySelector('.returnBtn'),
    choiceWrapper = document.querySelector('.choiceWrapper'),
    choice1 = document.querySelector('.choice1'),
    choice2 = document.querySelector('.choice2'),
    choice3 = document.querySelector('.choice3');

let opening = ["Начало квеста",
    "Кнопки должны зеленеть при нажатии",
    "В конце должны появиться 3 варианта выбора",
    "Пока они просто забиты цифрами",
    "При наведении они должны краснеть",
    "А при нажатии зеленеть",
    {
        choice1: 'Выбор 1',
        choice2: 'Выбор 2',
        choice3: 'Выбор 3',
        storyline: '',
    }];

let storyline2 = ["Второй массив",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    {
        choice1: 'Выбор 11',
        choice2: 'Выбор 22',
        choice3: 'Выбор 33',
    }];

let storyline3 = ["Третий массив",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",];

let storyline4 = ["Третий массив",
    "1",
    "2",
    "3",];

function control() {

    let storyline = opening;
    let textArr = storyline;

    function choices() {
        choiceWrapper.style.display = 'flex';

        function choi() {
            i = 0;
            narration.style.display = 'block';
            textArr = storyline;
            narration.textContent = textArr[i];
            nextBtn.style.display = 'block';
            returnBtn.style.display = 'none';
            backBtn.style.display = 'none';
            choiceWrapper.style.display = 'none';
        }

        choice1.onclick = choi;
        choice2.onclick = choi;
        choice3.onclick = choi;
    }

    function storyChoice() {
        storyline = storyline2;
        choice1.textContent = textArr[textArr.length - 1].choice1;
        choice2.textContent = textArr[textArr.length - 1].choice2;
        choice3.textContent = textArr[textArr.length - 1].choice3;
    }

    let i = 0;

    startBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    narration.textContent = textArr[i];

    nextBtn.onclick = function () {
        i++;
        narration.textContent = textArr[i];
        console.log(i);
        if (i >= 1) {
            backBtn.style.display = 'block';
        }
        if (i >= textArr.length - 1) {
            nextBtn.style.display = 'none';
        }
        if (i >= textArr.length - 1) {
            returnBtn.style.display = 'block';
        }
        if (i == textArr.length - 1) {
            narration.style.display = 'none';
            choices();
            storyChoice();
            console.log(textArr);
        }
    };

    backBtn.onclick = function () {
        i--;
        narration.style.display = 'block';
        narration.textContent = textArr[i];
        console.log(i);
        if (i < 1) {
            backBtn.style.display = 'none';
        }
        if (i <= textArr.length) {
            nextBtn.style.display = 'block';
            returnBtn.style.display = 'none';
            choiceWrapper.style.display = 'none';
        }

    };

    returnBtn.onclick = function () {
        i = 0;
        narration.style.display = 'block';
        narration.textContent = textArr[i];
        console.log(i);
        if (i < 1) {
            returnBtn.style.display = 'none';
            backBtn.style.display = 'none';
            nextBtn.style.display = 'block';
            choiceWrapper.style.display = 'none';
        }
    };
}

startBtn.onclick = control;