function menuShow() {
    let mobileMenu = document.querySelector('.mobile-menu');
    let mobileMenuButton = document.querySelector('.mobile-menu-icon button');
  
    if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none';
      mobileMenuButton.classList.remove('collapsed');
    } else {
      mobileMenu.style.display = 'flex';
      mobileMenuButton.classList.add('collapsed');
    }
  }  
  
  
  
  
  