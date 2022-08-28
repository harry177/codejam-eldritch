import greenCards from './assets/MythicCards/green/greencards.js';
import brownCards from './assets/MythicCards/brown/browncards.js';
import blueCards from './assets/MythicCards/blue/bluecards.js';

let greens = greenCards;

let isEasy;
let isMedium;
let isHard;

let isAzathoth;


// Azathoth selections

let azathothSelectionGreen = [];
let azathothSelectionBrown = [];
let azathothSelectionBlue = [];


   function getGreenAzathoth() {
    greens.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 5; i++) {
        azathothSelectionGreen.push(greens[i]);
    };
  }
  getGreenAzathoth();


  function getBrownAzathoth() {
    brownCards.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 9; i++) {
        azathothSelectionBrown.push(brownCards[i]);
    }
    console.log(azathothSelectionBrown);
  }
  getBrownAzathoth();


function getBlueAzathoth() {
    blueCards.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 2; i++) {
        azathothSelectionBlue.push(blueCards[i]);
    }
    console.log(azathothSelectionBlue);
  }
  getBlueAzathoth();

// Azathoth medium

let stageOneAzathoth = [];

function formStageOneAzathoth () {
    stageOneAzathoth.push(azathothSelectionGreen[0]);
    stageOneAzathoth.push(azathothSelectionBrown[0]);
    stageOneAzathoth.push(azathothSelectionBrown[1])
    stageOneAzathoth.push(azathothSelectionBlue[0]);

    stageOneAzathoth.sort(() => Math.random() - 0.5);

    console.log(stageOneAzathoth);
}
formStageOneAzathoth();

let stageTwoAzathoth = [];

function formStageTwoAzathoth () {
    stageTwoAzathoth.push(azathothSelectionGreen[1]);
    stageTwoAzathoth.push(azathothSelectionGreen[2]);
    stageTwoAzathoth.push(azathothSelectionBrown[2]);
    stageTwoAzathoth.push(azathothSelectionBrown[3]);
    stageTwoAzathoth.push(azathothSelectionBrown[4]);
    stageTwoAzathoth.push(azathothSelectionBlue[1]);

    stageTwoAzathoth.sort(() => Math.random() - 0.5);

    console.log(stageTwoAzathoth);
}
formStageTwoAzathoth();

let stageThreeAzathoth = [];

function formStageThreeAzathoth () {
    stageThreeAzathoth.push(azathothSelectionGreen[3]);
    stageThreeAzathoth.push(azathothSelectionGreen[4]);
    stageThreeAzathoth.push(azathothSelectionBrown[5]);
    stageThreeAzathoth.push(azathothSelectionBrown[6]);
    stageThreeAzathoth.push(azathothSelectionBrown[7]);
    stageThreeAzathoth.push(azathothSelectionBrown[8]);

    stageThreeAzathoth.sort(() => Math.random() - 0.5);

    console.log(stageThreeAzathoth);
}
formStageThreeAzathoth();


let gameStackAzathoth = [];

function makeAzathothStack () {
    gameStackAzathoth = gameStackAzathoth.concat(stageThreeAzathoth, stageTwoAzathoth, stageOneAzathoth);

    console.log(gameStackAzathoth)
}

makeAzathothStack();


// Ancients activity

const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const logsothoth = document.querySelector('.logsothoth');
const shubniggurath = document.querySelector('.shubniggurath');
const underside = document.querySelector('.underside');
const cards = document.querySelector('.cards');



function makeAzathoth() {
    azathoth.classList.toggle('active');
    cthulthu.classList.remove('active');
    logsothoth.classList.remove('active');
    shubniggurath.classList.remove('active');

    isAzathoth = true;


    oneGreen.textContent = (stageOneAzathoth.filter(function(x){return x.color == 'green'}).length);
    oneBrown.textContent = (stageOneAzathoth.filter(function(x){return x.color == 'brown'}).length);
    oneBlue.textContent = (stageOneAzathoth.filter(function(x){return x.color == 'blue'}).length);
    twoGreen.textContent = (stageTwoAzathoth.filter(function(x){return x.color == 'green'}).length);
    twoBrown.textContent = (stageTwoAzathoth.filter(function(x){return x.color == 'brown'}).length);
    twoBlue.textContent = (stageTwoAzathoth.filter(function(x){return x.color == 'blue'}).length);
    threeGreen.textContent = (stageThreeAzathoth.filter(function(x){return x.color == 'green'}).length);
    threeBrown.textContent = (stageThreeAzathoth.filter(function(x){return x.color == 'brown'}).length);
    threeBlue.textContent = (stageThreeAzathoth.filter(function(x){return x.color == 'blue'}).length);

}

azathoth.addEventListener('click', makeAzathoth);

function makeCthulthu() {
    cthulthu.classList.toggle('active');
    azathoth.classList.remove('active');
    logsothoth.classList.remove('active');
    shubniggurath.classList.remove('active');
}

cthulthu.addEventListener('click', makeCthulthu);

function makeLogsothoth() {
    logsothoth.classList.toggle('active');
    cthulthu.classList.remove('active');
    azathoth.classList.remove('active');
    shubniggurath.classList.remove('active');
}

logsothoth.addEventListener('click', makeLogsothoth);

function makeShubniggurath() {
    shubniggurath.classList.toggle('active');
    logsothoth.classList.remove('active');
    cthulthu.classList.remove('active');
    azathoth.classList.remove('active');
}

shubniggurath.addEventListener('click', makeShubniggurath);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


underside.addEventListener('click', function () {
    cards.style.backgroundImage = gameStackAzathoth[gameStackAzathoth.length-1].src;

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'green' && oneGreen.textContent > 0) {
    oneGreen.textContent = oneGreen.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'brown' && oneBrown.textContent > 0) {
    oneBrown.textContent = oneBrown.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'blue' && oneBlue.textContent > 0) {
    oneBlue.textContent = oneBlue.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'green' && 
  oneGreen.textContent == 0 && oneBrown.textContent == 0 && oneBlue.textContent == 0 && twoGreen.textContent > 0)  {
    twoGreen.textContent = twoGreen.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'brown' &&
  oneGreen.textContent == 0 && oneBrown.textContent == 0 && oneBlue.textContent == 0 && twoBrown.textContent > 0)  {
    twoBrown.textContent = twoBrown.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'blue' &&
  oneGreen.textContent == 0 && oneBrown.textContent == 0 && oneBlue.textContent == 0 && twoBlue.textContent > 0)  {
    twoBlue.textContent = twoBlue.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'green' &&
  twoGreen.textContent == 0 && twoBrown.textContent == 0 && twoBlue.textContent == 0 && threeGreen.textContent > 0)  {
    threeGreen.textContent = threeGreen.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'brown' &&
  twoGreen.textContent == 0 && twoBrown.textContent == 0 && twoBlue.textContent == 0 && threeBrown.textContent > 0)  {
    threeBrown.textContent = threeBrown.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };

  if (gameStackAzathoth[gameStackAzathoth.length-1].color === 'blue' &&
  twoGreen.textContent == 0 && twoBrown.textContent == 0 && twoBlue.textContent == 0 && threeBlue.textContent > 0)  {
    threeBlue.textContent = threeBlue.textContent - 1;
    gameStackAzathoth.pop();
    return false;
  };
}
)

console.log(gameStackAzathoth)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Difficulties activity

const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');

function addActiveEasy() {
    easy.classList.add('active');
    medium.classList.remove('active');
    hard.classList.remove('active');
    isEasy = true;
    isMedium = false;
    isHard = false;
}

easy.addEventListener('click', addActiveEasy);


console.log (isEasy);


function addActiveMedium() {
    medium.classList.toggle('active');
    easy.classList.remove('active');
    hard.classList.remove('active');
    isEasy = false;
    isMedium = true;
    isHard = false;
}

medium.addEventListener('click', addActiveMedium);


function addActiveHard() {
    hard.classList.toggle('active');
    easy.classList.remove('active');
    medium.classList.remove('active');
    isEasy = false;
    isMedium = false;
    isHard = true;
}

hard.addEventListener('click', addActiveHard);


const oneGreen = document.querySelector('.one');
const oneBrown = document.querySelector('.two');
const oneBlue = document.querySelector('.three');
const twoGreen = document.querySelector('.four');
const twoBrown = document.querySelector('.five')
const twoBlue = document.querySelector('.six');
const threeGreen = document.querySelector('.seven');
const threeBrown = document.querySelector('.eight');
const threeBlue = document.querySelector('.nine');