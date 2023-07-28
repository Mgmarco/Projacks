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

  document.addEventListener("DOMContentLoaded", function () {
    // Obtém os botões e conteúdos
    const botaoProposta = document.getElementById("botao-proposta");
    const botaoValores = document.getElementById("botao-valores");
    const botaoAtuacao = document.getElementById("botao-atuacao");
    const conteudoProposta = document.getElementById("conteudo-proposta");
    const conteudoValores = document.getElementById("conteudo-valores");
    const conteudoAtuacao = document.getElementById("conteudo-atuacao");

    // Função para exibir o conteúdo e ocultar os outros
    function exibirConteudo(secaoExibida) {
      conteudoProposta.style.display = "none";
      conteudoValores.style.display = "none";
      conteudoAtuacao.style.display = "none";

      secaoExibida.style.display = "block";
    }

    // Adiciona os eventos de clique aos botões
    botaoProposta.addEventListener("click", function () {
      exibirConteudo(conteudoProposta);
    });

    botaoValores.addEventListener("click", function () {
      exibirConteudo(conteudoValores);
    });

    botaoAtuacao.addEventListener("click", function () {
      exibirConteudo(conteudoAtuacao);
    });
  })

// Função para adicionar/remover a classe "navbar-colored" ao navbar quando a página é rolada
function toggleNavbarColor() {
  const navbar = document.querySelector('.nav-bar');
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    navbar.classList.add('navbar-colored');
  } else {
    navbar.classList.remove('navbar-colored');
  }
}

// Adiciona um event listener para chamar a função toggleNavbarColor() quando a página é rolada
window.addEventListener('scroll', toggleNavbarColor);


  // Função para ajustar o posicionamento da seção "Quem Somos" após clicar no link
  function scrollWithOffset(el) {
    const offset = 100; // Defina o valor do offset aqui (ajuste conforme necessário)
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // Adicione um event listener para o clique nos links do nav-list
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Evita o comportamento padrão de clicar em um link

      // Obtém o alvo do link (neste caso, a seção "Quem Somos")
      const href = link.getAttribute('href');
      const target = document.querySelector(href);

      // Rola até o alvo com offset para evitar que a barra de navegação fixa sobreponha o conteúdo
      if (target) {
        scrollWithOffset(target);
      }
    });
  });

  // Função para controlar o efeito de slide nos serviços
document.addEventListener("DOMContentLoaded", function() {
  const slideElements = document.querySelectorAll(".slideN");

  slideElements.forEach(function(slide, index) {
    slide.addEventListener("click", function() {
      slideElements.forEach(function(slide) {
        slide.classList.remove("active-slide");
      });
      slide.classList.add("active-slide");
    });
  });
});

  