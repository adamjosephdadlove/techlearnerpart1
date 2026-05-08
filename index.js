const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('nav-bar');
const answer = "Correct";

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
