let arr = [];
class object {
  constructor(value) {
    this.que = value;
  }
}
var difficulty = "easy";
function level() {
  divs.forEach((element) => {
    element.style.backgroundColor = "rgb(82,82,91)";
  });
  pointer = 0;
  var levelSelector = document.querySelector("#levelSelector").value;
  if (levelSelector == 1) {
    difficulty = "easy";
  }
  if (levelSelector == 2) {
    difficulty = "medium";
  }
  if (levelSelector == 3) {
    difficulty = "hard";
  }
  arr.length = 0;
  fetchit();
}
var CategoryForApi = "Linux";
function category() {
  divs.forEach((element) => {
    element.style.backgroundColor = "rgb(82,82,91)";
  });
  pointer = 0;
  var category = document.querySelector("#category").value;
  if (category == 1) {
    CategoryForApi = "Linux";
  }
  if (category == 2) {
    CategoryForApi = "DevOps";
  }
  if (category == 3) {
    CategoryForApi = "Docker";
  }
  arr.length = 0;
  fetchit();
}
var apikey = "UwKd8if2hm54PRvK7BS24fGhNKWuSk6KTBNv1KpP";
fetchit();

function fetchit() {
  for (var i = 0; i < 20; i++) {
    fetch(
      `https://quizapi.io/api/v1/questions?difficulty=${difficulty}&category=${CategoryForApi}&apiKey=${apikey}&limit=10`
    )
      .then((Response) => Response.json())
      .then((data) => {
        var obj = new object(data[0].question);
        obj.ans = data[0].answers;
        obj.correct = data[0].correct_answers;
        obj.category = data[0].category;
        obj.difficulty = data[0].difficulty;
        obj.visited = false;
        obj.answered = false;
        obj.marked = false;
        obj.selectedOption = null;
        obj.marks = 0;
        obj.submit=false
        arr.push(obj);
        Dom();
      });
  }
}

//questionBox filling

var pointer = 0;
function prevbutton() {
  if (pointer > 0) {
    pointer--;
    Dom();
  }
}
function nextbutton() {
  if (pointer < 19) {
    pointer++;
    Dom();
  } else popup();
}
// timer

// timer
var timer = document.getElementById("timer");
var intervalId;
var seconds = 60;
var minute = 14;

function stopTimer() {
  clearInterval(intervalId);
}

if (minute === 0 && seconds === 0) {
  stopTimer();
  pop();
}

intervalId = setInterval(() => {
  seconds--;
  if (seconds === 0) {
    minute--;
    seconds = 60;
    if (minute === 0) {
      stopTimer();
      poptime();
    }
  }
  timer.innerHTML = `00:${minute}:${seconds}`;
}, 1000);
function poptime() {
  alert("Your time is over your examination is submitted");
  root.innerHTML = "";
}
// progreee bar

// var progressBar = document.querySelector(".progressBar");
// var width = 0;
// setInterval(() => {
//   width++;
//   progressBar.style.width = width + "px";
// }, 2300);

// dark mode toggle

var flagForMode = 0;
var toggle = document.querySelector(".toggle");
var darkMode = document.querySelector(".darkMode");
var darkModesvg = document.querySelector(".darkModeSvg");
var lightMode = document.querySelector(".lightMode");
var lightModesvg = document.querySelector(".lightModeSvg");
var whitebggg = document.querySelectorAll(".white-bg");
var mangobggg = document.querySelectorAll(".mango-bg");
var redbggg = document.querySelector(".red-bg");
var bluebggg = document.querySelector(".blue-bg");
var buttonbgg = document.querySelectorAll(".button-bg");
var yellowbg = document.querySelectorAll(".yellowbg");
darkModesvg.style.visibility = "hidden";
darkMode.style.backgroundColor = "#212121";
toggle.style.backgroundColor = "rgb(71,85,105)";

function darkmode() {
  if (flagForMode == 0) {
    darkMode.style.backgroundColor = "black";
    toggle.style.backgroundColor = "black";
    lightMode.style.backgroundColor = "rgb(71,85,105)";
    darkModesvg.style.visibility = "visible";
    lightModesvg.style.visibility = "hidden";
    whitebggg.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "#1e1e1e";
    });
    buttonbgg.forEach((element) => {
      element.style.backgroundColor = "rgb(71,85,105)";
      element.style.color = "white";
    });
    redbggg.style.backgroundColor = "red";
    bluebggg.style.backgroundColor = "rgb(2,132,199)";
    mangobggg.forEach((element) => {
      element.style.backgroundColor = "rgb(209,213,219)";
      element.style.color = "#99999";
    });
    yellowbg.forEach((element) => {
      element.style.backgroundColor = "rgb(30, 41 ,59)";
      element.style.color = "#99999";
    });
    // // bg change
    // whitebggg.style.backgroundColor = "white";
    // //font change
    // whitebggg.style.color = "#1e1e1e";

    flagForMode++;
  } else {
    lightMode.style.backgroundColor = "rgb(71,85,105)";
    toggle.style.backgroundColor = "rgb(71,85,105)";
    darkMode.style.backgroundColor = "#212121";
    lightModesvg.style.visibility = "visible";
    darkModesvg.style.visibility = "hidden";
    whitebggg.forEach((element) => {
      element.style.backgroundColor = "#1e1e1e";
      element.style.color = "rgb(151,151,151)";
    });
    redbggg.style.backgroundColor = "rgb(30,41,59)";
    bluebggg.style.backgroundColor = "rgb(18,18,18)";
    mangobggg.forEach((element) => {
      element.style.backgroundColor = "rgb(82,82,91)";
      element.style.color = "black";
    });
    buttonbgg.forEach((element) => {
      element.style.backgroundColor = "rgb(30,41,59)";
      element.style.color = "rgb(151,151,151)";
    });
    yellowbg.forEach((element) => {
      element.style.backgroundColor = "rgb(71,85,105)";
      element.style.color = "rgb(151,151,151)";
    });
    // // bg change
    // whitebggg.style.backgroundColor = "#1e1e1e";
    // whitebggg.style.color = "white";
    flagForMode--;
  }
  loopfun();
}

function Dom() {
  if(arr[pointer].submit){
    ans()
  }
  // arr[pointer].visited = true;
  QueDOMByButtons1();
  //question
  const questionEl = document.getElementById("question");
  questionEl.innerText = arr[pointer].que;
  // options
  const options = document.querySelectorAll(".options");
  var ASCIICodeForA = 97;
  for (let i = 0; i < options.length; i++) {
    let char = String.fromCharCode(ASCIICodeForA);
    var temp = "answer_" + char;
    options[i].innerHTML = char + ") " + arr[pointer].ans[temp];
    ASCIICodeForA++;
  }
  // question No
  var questionNo = document.querySelector("#quehere1");
  questionNo.innerHTML = `Question ${pointer + 1}`;
  // second question no
  var quecounter2 = document.querySelector(".QueNo");
  quecounter2.innerHTML = `Question ${pointer + 1}/20`;

  // review
  // visited
  //answered ans not answered
  loopfun();
}
var visited = document.querySelector("#domNotVisited");
var selected = document.querySelector("#domAnswered");
var notSelected = document.querySelector("#domNotAnswered");
var Marked = document.querySelector("#domMarked");
var MarkedAndAnswered = document.querySelector("#domMarkedAndAnswered");
function loopfun() {
  var NotVisited = 20;
  var marked = 0;
  var selectedCounter = 0;
  var notSelectedCounter = 20;
  var markedAndAnswered = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].answered == true) {
      selectedCounter++;
      notSelectedCounter--;
    }
    if (arr[i].visited == true) {
      NotVisited--;
    }
    if (arr[i].marked == true && arr[i].answered == true) {
      markedAndAnswered++;
    }
    if (arr[i].marked == true) {
      marked++;
    }

    if (flagForMode === 0) {
      if (arr[pointer].selectedOption === null) {
        options.forEach((element) => {
          element.style.backgroundColor = "rgb(82,82,91)";
          element.style.color = "#e2e2e2";
        });
      }
      if (arr[pointer].selectedOption !== null) {
        options.forEach((element) => {
          element.style.backgroundColor = "rgb(82,82,91)";
          element.style.color = "#e2e2e2";
        });
        var optbg = document.querySelector(`#${arr[pointer].selectedOption}`);
        optbg.style.backgroundColor = "#B0C4DE";
        optbg.style.color = "black";
      }

      if (arr[i].marked == true) {
        divs[i].style.backgroundColor = "#EEDC82";
      }
      if (arr[i].answered == true) {
        divs[i].style.backgroundColor = "#B0C4DE";
      }
    }
    if (flagForMode === 1) {
      if (arr[pointer].selectedOption === null) {
        options.forEach((element) => {
          element.style.backgroundColor = "#D1D5DB";
          element.style.color = "#000";
        });
      }
      if (arr[pointer].selectedOption !== null) {
        options.forEach((element) => {
          element.style.backgroundColor = "#D1D5DB";
          element.style.color = "#000";
        });
        var optbg = document.querySelector(`#${arr[pointer].selectedOption}`);
        optbg.style.backgroundColor = "rgb(82,82,91)";
        optbg.style.color = "white";
      }
    }
    if (arr[i].marked == true) {
      divs[i].style.backgroundColor = "#EEDC82";
    }
    if (arr[i].answered == true) {
      divs[i].style.backgroundColor = "#B0C4DE";
    }
  }
  MarkedAndAnswered.innerHTML = markedAndAnswered;
  Marked.innerHTML = marked;
  visited.innerHTML = NotVisited;
  selected.innerHTML = selectedCounter;
  notSelected.innerHTML = notSelectedCounter;

  //quedom
}

// queCounter SUmmary

var divs = document.querySelectorAll("#myDiv");
if (pointer == 0) {
  if (flagForMode == 0) {
    divs[0].style.backgroundColor = "rgb(253 186 116)";
    divs[0].style.border = "solid 2px red";
    divs[0].style.color = "red";
    divs[0].style.fontSize = "25px";
  } else {
    divs[0].style.backgroundColor = "rgb(253 186 116)";
    divs[0].style.border = "solid 2px red";
    divs[0].style.color = "red";
    divs[0].style.fontSize = "25px";
  }
}
function QueDOMByButtons() {}
function QueDOMByButtons1() {
  arr[pointer].visited = true;
  divs.forEach(function (div, index) {
    if (index !== pointer) {
      div.style.border = "none";
      div.style.color = "black";
      div.style.fontSize = "20px";
    }
    if (index === pointer) {
      div.style.backgroundColor = "rgb(253 186 116)";
      div.style.border = "solid 2px red";
      div.style.color = "red";
      div.style.fontSize = "25px";
    }
  });
}

//adding eventlistener in button queCOunter

var button = document.querySelectorAll(".ButtonOfQueCounter");
for (let i = 0; i < divs.length; i++) {
  button[i].addEventListener("click", function Valuegiveer() {
    pointer = parseInt(button[i].innerText) - 1;
    Dom();
    QueDOMByButtons1();
    //changing value of visited == true
    arr[pointer].visited = true;
  });
}

// event listners for options button
var options = document.querySelectorAll(".options");
options.forEach((element) => {
  element.addEventListener("click", function selectionForOpt() {
    arr[pointer].answered = true;
    arr[pointer].selectedOption = element.id;
    Dom();
    // loopfun()
  });
});

// clear response
function clearResponse() {
  arr[pointer].answered = false;
  arr[pointer].marked = false;
  arr[pointer].selectedOption = null;
  Dom();
}
// marked button
function markbutton() {
  arr[pointer].marked = true;
  Dom();
}



function popup() {
  var visited = document.querySelector("#domNotVisited").innerText;
  var selected = document.querySelector("#domAnswered").innerText;
  var notSelected = document.querySelector("#domNotAnswered").innerText;
  var Marked = document.querySelector("#domMarked").innerText;
  var subPallete = document.querySelector(".subPallete");
  subPallete.style.visibility = "visible";
  var subAns = document.querySelector(".subAns");
  var subNotAns = document.querySelector(".subNotAns");
  var subMarked = document.querySelector(".subMarked");
  var subNotVisited = document.querySelector(".subNotVisited");
  subAns.innerHTML = selected;
  subNotAns.innerHTML = notSelected;
  subMarked.innerHTML = Marked;
  subNotVisited.innerHTML = visited;
}

// marks





function fff() {
  var subPallete = document.querySelector(".subPallete");
  subPallete.style.visibility = "hidden";
}


function pop() {
  document.querySelector(".ansbox").classList.remove("hidden");
  arr.forEach((element)=>{
    element.submit=true
  })
  var marks = 0;
  // Disable options
  let options = document.querySelectorAll(".options");
  options.forEach((element) => {
    element.setAttribute("disabled", "disabled");
  });
// marks calculator
  arr.forEach((object) => {
    if (object.selectedOption) {
      var answerKey = "answer_" + object.selectedOption + "_correct";
      if (object.correct[answerKey] === "true") {
        marks++;
      }
    }
  });
  var subPallete = document.querySelector(".subPallete");
  subPallete.style.visibility = "hidden";
  alert("Your Examination is Over and Answers are Submitted");
  document.querySelector(".score").classList.remove("hidden");
  document.querySelector(".marksinner").innerHTML=marks
  ans()
  var submit=document.querySelector(".submit")
  submit.classList.add("hidden")
}






function ans(){
  var ansbox=document.querySelector(".ansbox")
  if (arr[pointer].correct.answer_a_correct === "true") {
    ansbox.innerHTML = "Correct option is A";
  } else if (arr[pointer].correct.answer_b_correct === "true") {
    ansbox.innerHTML = "Correct option is B";
  } else if (arr[pointer].correct.answer_c_correct === "true") {
    ansbox.innerHTML = "Correct option is C";
  } else if (arr[pointer].correct.answer_d_correct === "true") {
    ansbox.innerHTML = "Correct option is D";
  }
  else{
    ansbox.innerHTML="API Error"
  }
}

function marksclose(){
  document.querySelector(".score").classList.add("hidden");
}