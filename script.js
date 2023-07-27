// Função para o navbar abrir e fechar com o botão hamburguer e X
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

  // Função para os botões da seção quem somos
  const botoesQuemSomos = document.querySelectorAll('.botao-quem-somos');
  const conteudosQuemSomos = document.querySelectorAll('.conteudo-quem-somos');

  botoesQuemSomos.forEach(botao => {
    botao.addEventListener('click', () => {
      const conteudoAlvo = botao.dataset.conteudo;
      conteudosQuemSomos.forEach(conteudo => {
        conteudo.style.display = 'none';
      });
      document.getElementById(conteudoAlvo).style.display = 'block';
    });
  });
  