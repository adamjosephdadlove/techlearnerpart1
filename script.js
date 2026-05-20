let score = 0; 

function ans() {
   score+=1;
    if(score > 5) score=5;
}

function wrongAns() {
      score-=1;
    if(score < 0) score=0;
  }
  function submit() {
    document.getElementById("scoreResult").innerHTML = `You got ${score} out of 5.`;
}

function createAccount() {
  const username = document.getElementById("userName").value;
  const password = document.getElementById("passWord").value;

  document.getElementById("accountResult").innerHTML =
    `Do you recognize that you have set a password and username.`;
}

function accountLogin() {
  const username = document.getElementById("userNameConfirm").value;
  const password = document.getElementById("passWordConfirm").value;

  const usernameValidation = document.getElementById("userName").value;
  const passwordValidation = document.getElementById("passWord").value;

  if (usernameValidation === username && passwordValidation === password) {
    document.getElementById("loginResult").innerHTML = "Account login successful";
  } else {
    document.getElementById("loginResult").innerHTML = "Account login unsuccessful!";
  }
}
window.addEventListener("DOMContentLoaded", function() {
   const timerDisplay = document.getElementById('timer-display');

   let time = 20;
   
   const interval = setInterval(theTimer ,1000)
   
   function theTimer() {
      timerDisplay.innerHTML = `${time} seconds left!`;
      if(time <= 0) {
      timerDisplay.innerHTML = `Time's Up!`;
      timerDisplay.style.color = "rgb(240, 10, 10)";
      clearInterval(interval); 
      }
      time--;
   }
});

function styling(element) {
   element.classList.toggle('selected');
}
