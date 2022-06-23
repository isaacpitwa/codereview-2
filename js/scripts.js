
function toggleMenu() {
    document.getElementById('toggle-menu').classList.toggle('toggle-menu');
    document.querySelector('header').classList.toggle('remove-padding');
  }
  function mobileMenuOption(event, id) {
    event.preventDefault();
    toggleMenu();
    const linkTo = document.getElementById(id);
    linkTo.scrollIntoView();
  }
