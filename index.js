const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('nav-bar');
let score = 0;

if()
menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

window.addEventListener('resize', function(){
  if (window.innerWidth > 768) {
    navBar.classList.remove('active');
  }
});

function goToMath() {
  window.location.href="math.html";
}

function goToScience() {
  window.location.href="science.html";
}

function goToEnglish() {
  window.location.href="english.html";
}


function select(choice) {
  choice.classList.toggle("active");
}

function checkEfficiently() {
  let score = 0;

  let correct = document.getElementsByClassName("questionButtons");

 
  if (correct[0].classList.contains("active")) { score = score + 1; }
  if (correct[1].classList.contains("active")) { score = score + 1; }
  if (correct[2].classList.contains("active")) { score = score + 1; }
  if (correct[3].classList.contains("active")) { score = score + 1; }
  if (correct[4].classList.contains("active")) { score = score + 1; }

  document.querySelector(".smallText").innerHTML = "You got " + score + " out of 5.";
}
