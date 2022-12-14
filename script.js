import greenCards from './assets/MythicCards/green/greencards.js';
import brownCards from './assets/MythicCards/brown/browncards.js';
import blueCards from './assets/MythicCards/blue/bluecards.js';
import ancientsData from './assets/ancients.js';


let difficulty;



let isAzathoth;
let isCthulthu;
let isLogsothoth;
let isShubniggurath;


// Stage forms

const oneGreen = document.querySelector('.one');
let oneGreenNumber;
const oneBrown = document.querySelector('.two');
let oneBrownNumber;
const oneBlue = document.querySelector('.three');
let oneBlueNumber;
const twoGreen = document.querySelector('.four');
let twoGreenNumber;
const twoBrown = document.querySelector('.five')
let twoBrownNumber;
const twoBlue = document.querySelector('.six');
let twoBlueNumber;
const threeGreen = document.querySelector('.seven');
let threeGreenNumber;
const threeBrown = document.querySelector('.eight');
let threeBrownNumber;
const threeBlue = document.querySelector('.nine');
let threeBlueNumber;

let gameStack = [];

function shuffle() {

let selectionGreen = [];   // формируем массивы карт под условия сложности
let selectionBrown = [];
let selectionBlue = [];

let selectionGreenNormal = [];
let selectionBrownNormal = [];

if (difficulty === 'medium') {
    greenCards.forEach(elem => {
        selectionGreen.push(elem)
    });

    brownCards.forEach(elem => {
        selectionBrown.push(elem)
    });

    blueCards.forEach(elem => {
        selectionBlue.push(elem)
    });
} else if (difficulty === 'easy') {
  greenCards.forEach(elem => {
    if (elem.level !== 'hard') {
      selectionGreen.push(elem)
    }
  });
  brownCards.forEach(elem => {
    if (elem.level !== 'hard') {
      selectionBrown.push(elem)
    }
  });
  blueCards.forEach(elem => {
    if (elem.level !== 'hard') {
      selectionBlue.push(elem)
    }
  })
} else if (difficulty === 'hard') {
  greenCards.forEach(elem => {
    if (elem.level !== 'easy') {
      selectionGreen.push(elem)
    }
  });
  brownCards.forEach(elem => {
    if (elem.level !== 'easy') {
      selectionBrown.push(elem)
    }
  });
  blueCards.forEach(elem => {
    if (elem.level !== 'easy') {
      selectionBlue.push(elem)
    }
  });
} else if (difficulty === 'elementary') {
  blueCards.forEach(elem => {
    if (elem.level === 'easy') {
      selectionBlue.push(elem)
    }
  });
  greenCards.forEach(elem => {
    if (elem.level === 'easy') {
      selectionGreen.push(elem)
    } else if (elem.level === 'normal') {
      selectionGreenNormal.push(elem)
    }
  });
  brownCards.forEach(elem => {
    if (elem.level === 'easy') {
      selectionBrown.push(elem)
    } else if (elem.level === 'normal') {
      selectionBrownNormal.push(elem)
    }
  });
  if (selectionBrown.length < oneBrownNumber+twoBrownNumber+threeBrownNumber) {
    selectionBrownNormal.sort(() => Math.random() - 0.5);
    selectionBrown = selectionBrown.concat(selectionBrownNormal.slice(0, (oneBrownNumber+twoBrownNumber+threeBrownNumber) - selectionBrown.length))
  };
  if (selectionGreen.length < oneGreenNumber+twoGreenNumber+threeGreenNumber) {
    selectionGreenNormal.sort(() => Math.random() - 0.5);
    selectionGreen = selectionGreen.concat(selectionGreenNormal.slice(0, (oneGreenNumber+twoGreenNumber+threeGreenNumber) - selectionGreen.length))
  }
} else if (difficulty === 'nightmare') {
  blueCards.forEach(elem => {
    if (elem.level === 'hard') {
      selectionBlue.push(elem)
    }
  });
  greenCards.forEach(elem => {
    if (elem.level === 'hard') {
      selectionGreen.push(elem)
    } else if (elem.level === 'normal') {
      selectionGreenNormal.push(elem)
    }
  });
  brownCards.forEach(elem => {
    if (elem.level === 'hard') {
      selectionBrown.push(elem)
    } else if (elem.level === 'normal') {
      selectionBrownNormal.push(elem)
    }
  });
  if (selectionBrown.length < oneBrownNumber+twoBrownNumber+threeBrownNumber) {
    selectionBrownNormal.sort(() => Math.random() - 0.5);
    selectionBrown = selectionBrown.concat(selectionBrownNormal.slice(0, (oneBrownNumber+twoBrownNumber+threeBrownNumber) - selectionBrown.length))
  };
  if (selectionGreen.length < oneGreenNumber+twoGreenNumber+threeGreenNumber) {
    selectionGreenNormal.sort(() => Math.random() - 0.5);
    selectionGreen = selectionGreen.concat(selectionGreenNormal.slice(0, (oneGreenNumber+twoGreenNumber+threeGreenNumber) - selectionGreen.length))
  }
}


selectionGreen.sort(() => Math.random() - 0.5);
selectionBrown.sort(() => Math.random() - 0.5);
selectionBlue.sort(() => Math.random() - 0.5);

let stageThree = [];

stageThree = selectionBlue.slice(0, threeBlueNumber)
.concat(selectionBrown.slice(0, threeBrownNumber)).concat(selectionGreen.slice(0, threeGreenNumber));

stageThree.sort(() => Math.random() - 0.5);

console.log(stageThree);

let stageTwo = [];

stageTwo = selectionBlue.slice(threeBlueNumber, threeBlueNumber + twoBlueNumber)
.concat(selectionBrown.slice(threeBrownNumber, threeBrownNumber + twoBrownNumber))
.concat(selectionGreen.slice(threeGreenNumber, threeGreenNumber + twoGreenNumber));

stageTwo.sort(() => Math.random() - 0.5);


console.log(stageTwo);

let stageOne = [];

stageOne = selectionBlue.slice(threeBlueNumber+twoBlueNumber, threeBlueNumber+twoBlueNumber+oneBlueNumber)
.concat(selectionBrown.slice(threeBrownNumber+twoBrownNumber, threeBrownNumber+twoBrownNumber+oneBrownNumber))
.concat(selectionGreen.slice(threeGreenNumber+twoGreenNumber, threeGreenNumber+twoGreenNumber+oneGreenNumber));

stageOne.sort(() => Math.random() - 0.5);


console.log(stageOne);



gameStack = gameStack.concat(stageThree, stageTwo, stageOne);

console.log(gameStack);

}


alert ('1) Функция перетасовки карт активируется при выборе сложности (+ shuffle) \n 2) Выбор сложности доступен после выбора древнего.') ;








// Ancients activity

const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const logsothoth = document.querySelector('.logsothoth');
const shubniggurath = document.querySelector('.shubniggurath');
const underside = document.querySelector('.underside');
const cards = document.querySelector('.cards');



function setTracker(elem) {
    

    oneGreenNumber = ancientsData[elem].firstStage.greenCards;
    oneGreen.textContent = oneGreenNumber;

    oneBrownNumber = ancientsData[elem].firstStage.brownCards;
    oneBrown.textContent = oneBrownNumber;

    oneBlueNumber = ancientsData[elem].firstStage.blueCards;
    oneBlue.textContent = oneBlueNumber;

    twoGreenNumber = ancientsData[elem].secondStage.greenCards;
    twoGreen.textContent = twoGreenNumber;

    twoBrownNumber = ancientsData[elem].secondStage.brownCards;
    twoBrown.textContent = twoBrownNumber;

    twoBlueNumber = ancientsData[elem].secondStage.blueCards;
    twoBlue.textContent = twoBlueNumber;

    threeGreenNumber = ancientsData[elem].thirdStage.greenCards;
    threeGreen.textContent = threeGreenNumber;

    threeBrownNumber = ancientsData[elem].thirdStage.brownCards;
    threeBrown.textContent =threeBrownNumber;

    threeBlueNumber = ancientsData[elem].thirdStage.blueCards;
    threeBlue.textContent = threeBlueNumber;
}

azathoth.addEventListener('click', function () {
  setTracker(0);

    azathoth.classList.toggle('active');
    cthulthu.classList.remove('active');
    logsothoth.classList.remove('active');
    shubniggurath.classList.remove('active');

    isAzathoth = true;
    isCthulthu = false;
    isLogsothoth = false;
    isShubniggurath = false;
});

cthulthu.addEventListener('click', function() {
  setTracker(1);

    cthulthu.classList.toggle('active');
    azathoth.classList.remove('active');
    logsothoth.classList.remove('active');
    shubniggurath.classList.remove('active');

    isAzathoth = false;
    isCthulthu = true;
    isLogsothoth = false;
    isShubniggurath = false;
});
    

logsothoth.addEventListener('click', function() {
  setTracker(2);

    logsothoth.classList.toggle('active');
    cthulthu.classList.remove('active');
    azathoth.classList.remove('active');
    shubniggurath.classList.remove('active');

    isAzathoth = false;
    isCthulthu = false;
    isLogsothoth = true;
    isShubniggurath = false;
});
    

shubniggurath.addEventListener('click', function() {
  setTracker(3);

    shubniggurath.classList.toggle('active');
    logsothoth.classList.remove('active');
    cthulthu.classList.remove('active');
    azathoth.classList.remove('active');

    isAzathoth = false;
    isCthulthu = false;
    isLogsothoth = false;
    isShubniggurath = true;
});


// Difficulties activity

const elementary = document.querySelector('.elementary');
const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');
const nightmare = document.querySelector('.nightmare');


elementary.addEventListener ('click', function() {

  if (isAzathoth == true || isCthulthu == true || isLogsothoth == true || isShubniggurath == true) {
  difficulty = 'elementary';

  elementary.classList.toggle('active');
  easy.classList.remove('active');
  medium.classList.remove('active');
  hard.classList.remove('active');
  nightmare.classList.remove('active');

  shuffle();
  }
});

easy.addEventListener ('click', function() {

  if (isAzathoth == true || isCthulthu == true || isLogsothoth == true || isShubniggurath == true) {
  difficulty = 'easy';

  easy.classList.toggle('active');
  elementary.classList.remove('active');
  medium.classList.remove('active');
  hard.classList.remove('active');
  nightmare.classList.remove('active');

  shuffle();
  }
});

medium.addEventListener ('click', function() {

  if (isAzathoth == true || isCthulthu == true || isLogsothoth == true || isShubniggurath == true) {
  difficulty = 'medium';

  medium.classList.toggle('active');
  easy.classList.remove('active');
  elementary.classList.remove('active');
  hard.classList.remove('active');
  nightmare.classList.remove('active');

  shuffle();
  }
});

hard.addEventListener ('click', function() {

  if (isAzathoth == true || isCthulthu == true || isLogsothoth == true || isShubniggurath == true) {
  difficulty = 'hard';

  hard.classList.toggle('active');
  easy.classList.remove('active');
  elementary.classList.remove('active');
  medium.classList.remove('active');
  nightmare.classList.remove('active');

  shuffle();
  }
});

nightmare.addEventListener ('click', function() {

  if (isAzathoth == true || isCthulthu == true || isLogsothoth == true || isShubniggurath == true) {
  difficulty = 'nightmare';

  nightmare.classList.toggle('active');
  easy.classList.remove('active');
  elementary.classList.remove('active');
  medium.classList.remove('active');
  hard.classList.remove('active');

  shuffle();
  }
});




// show cards

underside.addEventListener('click', function () {
  if (gameStack.length > 0) {
    cards.style.backgroundImage = gameStack[gameStack.length-1].src;
    if (gameStack[gameStack.length-1].color === 'green') {
      if (oneGreen.textContent > 0) {
        oneGreen.textContent = oneGreen.textContent - 1;
      } else if (twoGreen.textContent > 0) {
        twoGreen.textContent = twoGreen.textContent - 1;
      } else {
        threeGreen.textContent = threeGreen.textContent - 1;
      }
    } else if (gameStack[gameStack.length-1].color === 'brown') {
      if (oneBrown.textContent > 0) {
        oneBrown.textContent = oneBrown.textContent - 1;
      } else if (twoBrown.textContent > 0) {
        twoBrown.textContent = twoBrown.textContent - 1;
      } else {
        threeBrown.textContent = threeBrown.textContent - 1;
      }
    } else {
      if (oneBlue.textContent > 0) {
        oneBlue.textContent = oneBlue.textContent - 1;
      } else if (twoBlue.textContent > 0) {
        twoBlue.textContent = twoBlue.textContent - 1;
      } else {
        threeBlue.textContent = threeBlue.textContent - 1;
      }
    }

  gameStack.pop();
  } else {
    cards.style.backgroundImage = '';
    difficulty = undefined;
    azathoth.classList.remove('active');
    cthulthu.classList.remove('active');
    logsothoth.classList.remove('active');
    shubniggurath.classList.remove('active');
    nightmare.classList.remove('active');
    easy.classList.remove('active');
    elementary.classList.remove('active');
    medium.classList.remove('active');
    hard.classList.remove('active');
  }
})