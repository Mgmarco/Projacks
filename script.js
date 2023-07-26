function menuShow() {
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileMenuButton = document.querySelector('.mobile-menu-icon button');

  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
    mobileMenuButton.innerHTML = '&#9776;'; // Ícone de três barras horizontais quando o menu está oculto
  } else {
    mobileMenu.style.display = 'flex';
    mobileMenuButton.innerHTML = 'X'; // Texto "X" para representar o ícone "X"
  }
}
