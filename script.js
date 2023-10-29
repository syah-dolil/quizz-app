 function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "paris") {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect.";
  }
}

/*function checkAnswer1() {
  const answer1 = document.getElementById("answer-input1").value;
  
  // Check if the input is a number
  if (!isNaN(answer1)) {
    const numAnswer = parseFloat(answer1);
    if (numAnswer == 8) {
      document.getElementById("result1").innerHTML = "Correct!";
    } else {
      document.getElementById("result1").innerHTML = "Incorrect.";
    }
  } else {
    // Check if the input is text
    if (answer1.toLowerCase() == "8 planets" || answer1.toLowerCase() == "eight planets") {      
      document.getElementById("result1").innerHTML = "Correct!";
    } else {
      document.getElementById("result1").innerHTML = "Incorrect.";
    }
  }
}*/
function checkAnswer1() {  
  const answer1 = document.getElementById("answer-input1").value;
  if (answer1.toLowerCase() == "13") {
    document.getElementById("result1").innerHTML = "Correct!";
  } else {
    document.getElementById("result1").innerHTML = "Incorrect.";
  }
}
