const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('nav-bar');


menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

window.addEventListener('resize', function(){
  if (window.innerWidth > 768) {
    navBar.classList.remove('active');
  }
});
