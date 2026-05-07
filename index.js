const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('nav-bar');

// Toggle Menu
menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

// Clean up state on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navBar.classList.remove('active');
  }
});
