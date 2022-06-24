function toggleMenu() {
  document.getElementById('toggle-menu').classList.toggle('hidden');
  document.getElementById('toggle-menu').classList.toggle('toggle-menu');
  document.getElementById('desktop-nav').classList.toggle('hidden');
  document.getElementById('toggle-btn').classList.toggle('hidden');
  document.getElementById('logo').classList.toggle('hidden');
}

function mobileMenuOption(event, id) {
  event.preventDefault();
  toggleMenu();
  const linkTo = document.getElementById(id);
  linkTo.scrollIntoView();
}
