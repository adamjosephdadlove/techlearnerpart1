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

  if (username === "" || password === "") {
    document.getElementById("accountResult").innerHTML = "Please enter a valid username and password.";
    return;
  }

  localStorage.setItem("savedUsername", username);
  localStorage.setItem("savedPassword", password);

  document.getElementById("accountResult").innerHTML =
    `Account created successfully! You can now log in below.`;
}

function accountLogin() {
 
  const username = document.getElementById("userNameConfirm").value;
  const password = document.getElementById("passWordConfirm").value;

  const registeredUsername = localStorage.getItem("savedUsername");
  const registeredPassword = localStorage.getItem("savedPassword");

  
  if (username === registeredUsername && password === registeredPassword) {
    document.getElementById("loginResult").innerHTML = "Account login successful!";
    
   
    sessionStorage.setItem("userSessionToken", "token" + Math.random());
    sessionStorage.setItem("activeUser", username); 
    
    
    window.location.href = "math.html";
  } else {
    document.getElementById("loginResult").innerHTML = "Invalid username or password!";
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
