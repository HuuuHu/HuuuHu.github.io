var minSet = 1;
var maxSet = 100;

var randomNumber = Number(minSet) + Math.floor(Math.random() * (maxSet - minSet));
console.log(randomNumber);

var min = minSet;
var max = maxSet;

var rangeTip = document.querySelector(' #rangeTip');
var guesses = document.querySelector(' .guesses');
var lastResult = document.querySelector(' .lastResult');
var lowOrHi = document.querySelector(' .lowOrHi');
var guessMessageWrapper = document.querySelector('.guessMessageWrapper')
var tiltedSquare = document.querySelector('.tiltedSquare')
var shake = document.querySelector('.shake')

var guessSubmit = document.querySelector(' .guessSubmit');
var guessField = document.querySelector(' .guessField');


guessSubmit.addEventListener('click', checkGuess);

console.log(guessField.value);

// var restart = document.querySelector(' .restart');
// restart.addEventListener('click', resetGame);

var setRange = document.querySelector(' .setRange');
var minNum = document.querySelector(' .min');
var maxNum = document.querySelector(' .max');
setRange.addEventListener('click', setNumberRange);

var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  guessMessageWrapper.style.display = 'block';
  // if (guessCount === 1 ) {
  //   guesses.textContent = '数字范围: ';
  // }
  // guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = ' 恭喜! 你猜对了!';
    lastResult.style.backgroundColour = 'green';
    lowOrHi.textContent = ' ';
    guessMessageWrapper.classList.add('right');
    tiltedSquare.classList.add('right');
    setGameOver();
    // } else if (guessCount === 10){
    //   lastResult.textContent = '!!!Game Over!!!'
    //   lastResult.style.color = 'white'
    //   lowOrHi.textContent = '';
    //   setGameOver();
  } else if (userGuess <= min || userGuess >= max) {
    lowOrHi.textContent = ' 请输入范围内的数字! ';
    shakeFuntion()
    return;
  } else {
    /*
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColour = 'red';
    */
    if (userGuess < randomNumber) {
      lowOrHi.textContent = ' 猜 得 太 小 了 ! ';
      min = userGuess;
      // guesses.textContent += userGuess + '(↓)  ';
      shakeFuntion()

    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = ' 猜 得 太 大 了 ! ';
      max = userGuess;
      // guesses.textContent += userGuess + '(↑)  ';
      shakeFuntion()
    }
    guesses.textContent = '数字范围: ' + min + ' ~ ' + max;

  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function shakeFuntion() {
  // restart animation
  guessMessageWrapper.classList.add('shake');
  setTimeout(function () {
    guessMessageWrapper.classList.remove('shake');
  }, 820);
}


function setGameOver() {

  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.className = 'submit relativePosition userField submitHover';
  var submitButton = document.getElementById('submitButton');
  submitButton.classList.remove('submitHover');
  resetButton.textContent = '重开';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame)

  var buttonsWrapper = document.getElementById('buttonsWrapper');
  buttonsWrapper.appendChild(resetButton);

}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[1].textContent = '';
  }

  if (resetButton) {

    resetButton.parentNode.removeChild(resetButton);
    resetButton = '';
  }

  guessSubmit.className = 'submit relativePosition userField submitHover';
  guessMessageWrapper.style.display = 'none';
  guessMessageWrapper.classList.remove('right');
  tiltedSquare.classList.remove('right');
  lastResult.textContent = '';

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  guesses.textContent = '';

  lastResult.style.backgroundColour = 'white';

  randomNumber = Number(minSet) + Math.floor(Math.random() * (maxSet - minSet));
  console.log(randomNumber);
  min = minSet;
  max = maxSet;
}

function setNumberRange() {
  if (minNum.hasAttribute("hidden")) {
    // console.log("hidden");
    minNum.removeAttribute("hidden");
    maxNum.removeAttribute("hidden");
    guessField.disabled = true;
    guessSubmit.disabled = true;
  } else {
    var minN = Number(minNum.value);
    var maxN = Number(maxNum.value);

    if ((minN || minN == 0) && maxN ) {
      console.log("输入为数值");
      if (minN >= maxN) {
        alert("请输入正确的数值范围");
        return;
      }
      
      minNum.setAttribute("hidden", "hidden");
      maxNum.setAttribute("hidden", "hidden");
  
      minSet = minNum.value;
      maxSet = maxNum.value;
      // console.log(minNum.value);
      // console.log(maxNum.value);
      // console.log(minSet);
      // console.log(maxSet);
      rangeTip.textContent = "在 "+ minSet + " ~ " + maxSet +" 内猜数字";
      resetGame();
    } else {
      alert("最大最小值请输入数值");
    }
  }
}