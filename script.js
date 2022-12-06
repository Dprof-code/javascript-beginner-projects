console.log("Script Loaded!");

let body = document.getElementById("body");

//overlay

let overlay = document.getElementById("overlay");

//close

let close = document.getElementById("close-btn");

// Task Box Selections
let taskBoxes = document.querySelectorAll(".task-box-container div");
let taskBoxesText = document.querySelectorAll(".task-box-container div h2");
let taskOpenBoxContainer = document.getElementById("task-container");

let clickedTaskBox = "";

let taskBoxList = document.getElementsByClassName("task-box");
//console.log(taskBoxList);
//for (let index = 0; index < taskBoxList.length; index++) {
//  console.log(taskBoxList[index].style);
//}

// Header
let title = document.getElementById("header-title");

// Back Button
let backBtn = document.getElementById("back-btn");

// Task Boxes Event

function taskBoxOpen() {
  taskBoxes.forEach((element) => {
    element.addEventListener("click", function taskBoxClick() {
      overlay.classList.add("show");
      taskOpenBoxContainer.style.display = "flex";
      let clickedTaskBtn = element.id;
      let task = clickedTaskBtn.slice(0, -4);
      clickedTaskBox = task;

      let taskOpen = document.getElementById(clickedTaskBox);
      taskOpen.classList.remove("hide");
      taskOpen.classList.add("show");
      window.scrollTo(0, 0);

      for (let index = 0; index < taskBoxList.length; index++) {
        taskBoxList[index].style.cursor = "not-allowed";
        //taskBoxList[index].style.pointerEvents = "none";
        taskBoxList[index].classList.add("not-clickable");
      }
    });
  });
}

taskBoxOpen();

close.addEventListener("click", function () {
  overlay.classList.remove("show");
  taskOpenBoxContainer.style.display = "none";

  let taskClose = document.getElementById(clickedTaskBox);
  taskClose.classList.remove("show");
  taskClose.classList.add("hide");

  //taskBoxList[index].style.pointerEvents = "fill";
  for (let index = 0; index < taskBoxList.length; index++) {
    taskBoxList[index].style.cursor = "pointer";
    //taskBoxList[index].style.pointerEvents = "auto";
    taskBoxList[index].classList.remove("not-clickable");
  }
});

//inputs

let evenOddCheckInput = document.getElementById(
  "number-input even-odd-number-check"
);
let primeNumberCheckInput = document.getElementById(
  "number-input prime-number-check"
);
let vowelConsonantCountCheckInput = document.getElementById(
  "word-input vowel-consonant-count-check"
);
let quadraticCalcInput = document.getElementById(
  "number-input quadratic-calc-input"
);
let palindromeCheckInput = document.getElementById(
  "word-input palindrome-check"
);
let backgroundColorChangeInput = document.getElementById(
  "background-color-select"
);

// Logics

//console.log(evenOddCheckInput);

evenOddCheckInput.addEventListener("change", function () {
  let num = evenOddCheckInput.value;
  let output = document.getElementById("even-odd-checker-output");

  if (num % 2 == 0) {
    output.innerText = "This is an even number";
    output.style.color = "#a66cff";
  } else if (num % 2 == 1) {
    output.innerText = "This is an odd number";
    output.style.color = "#a66cff";
  } else {
    output.innerText = "Invalid input";
    output.style.color = "red";
  }
});

primeNumberCheckInput.addEventListener("change", function () {
  let num = primeNumberCheckInput.value;
  let output = document.getElementById("prime-number-checker-output");
  let divCount = 1;
  let div = 0;
  while (divCount < num) {
    if (num % divCount == 0) {
      console.log(num % divCount);
      div++;
    }
    divCount++;
  }

  if (div < 2) {
    output.innerText = num + " is a prime number.";
  } else {
    output.innerText = num + " is not a prime number.";
  }
});

palindromeCheckInput.addEventListener("change", function () {
  let word = palindromeCheckInput.value;
  let wordCap = word.toUpperCase();
  let output = document.getElementById("palindrome-checker-output");
  let i = wordCap.length - 1;
  let reverseWord = "";

  while (i >= 0) {
    reverseWord += wordCap[i];
    i--;
  }

  if (wordCap === reverseWord) {
    output.innerText = word + " is a Palindrome";
  } else {
    output.innerText = word + " is not a Palindrome";
  }
});

vowelConsonantCountCheckInput.addEventListener("change", function () {
  var word = vowelConsonantCountCheckInput.value;
  let output = document.getElementById("vowel-consonant-count");
  var word = word.toUpperCase();

  let letters = /[A-Z]/g;
  let newWord = word.match(letters);
  let letterCountCheck;

  let vowels = ["A", "E", "I", "O", "U"];
  let vowelCountCheck;

  let vowelCount = 0;
  //let consonantCount;

  for (
    letterCountCheck = 0;
    letterCountCheck < newWord.length;
    letterCountCheck++
  ) {
    for (
      vowelCountCheck = 0;
      vowelCountCheck < vowels.length;
      vowelCountCheck++
    ) {
      if (newWord[letterCountCheck] == vowels[vowelCountCheck]) {
        vowelCount += 1;
        break;
      }
    }
  }

  let consonantCount = newWord.length - vowelCount;

  output.innerText =
    "The number of vowel letters are: " +
    vowelCount +
    " and the number of consonant letters are: " +
    consonantCount;
});

quadraticCalcInput.addEventListener("change", function () {
  let eqn = quadraticCalcInput.value;
  let output = document.getElementById("quadratic-calc-output");

  let eqnPattern = /^[\d]{1,}x\^2[\+\-][\d]{1,}x[\+\-][\d]{1,}=0$/gi;

  //Roots of Quadratic Equation
  var a, b, c;

  if (eqnPattern.test(eqn)) {
    var a = eqn.match(/[\d]{1,}x\^2/gi).toString();
    var b = eqn.match(/[\+\-][\d]{1,}x/gi).toString();
    var c = eqn.match(/[\+\-][\d]{1,}/gi);
    //console.log(a);
    //console.log(b);
    //console.log(c);
  } else {
    output.innerText = "Enter an equation in the form ax^2+bx+c=0";
    output.style.color = "red";
  }

  //Root Values
  var a = a.slice(0, a.length - 3);
  var b = b.slice(0, b.length - 1);
  var c = c[1];

  var d = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  //console.log(d);

  var x1 = (-b + d) / (2 * a);
  var x2 = (-b - d) / (2 * a);
  //console.log(x1);
  //console.log(x2);

  output.innerText = "The root of the Equation is: " + x1 + " or " + x2;
  output.style.color = "#a66cff";
});

backgroundColorChangeInput.addEventListener("input", function () {
  let color = backgroundColorChangeInput.value;

  body.style.background = color;
});
