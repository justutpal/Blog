const navMenu = document.getElementById('navbar'),
  humburger = document.getElementById('humburger'),
  cancel = document.getElementById('cancel');

if (humburger) {
  humburger.addEventListener('click', () => {
    humburger.style.display = 'none'
    navMenu.classList.add('show');
    cancel.classList.add('show');
  });
}

if (cancel) {
  cancel.addEventListener('click', () => {
    humburger.style.display = 'inline'
    navMenu.classList.remove('show');
    cancel.classList.remove('show');
  });
}