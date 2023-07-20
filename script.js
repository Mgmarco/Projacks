// Array com os slogans
const slogans = [
    "Soluções em TI",
    "Consultoria especializada",
    "Assistência Técnica"
];

// Função para alternar os slogans com fade
function alternarSlogan() {
    const sloganElements = document.querySelectorAll('.slogan');
    let index = 0;

    setInterval(function() {
        const currentSlogan = sloganElements[index];
        const nextIndex = (index + 1) % slogans.length;
        const nextSlogan = sloganElements[nextIndex];

        currentSlogan.classList.remove('active');
        nextSlogan.classList.add('active');

        index = nextIndex;
    }, 3000); // Intervalo de 3 segundos para trocar os slogans
}

// Função para atualizar a contagem regressiva
function atualizarContagemRegressiva() {
    const dataLancamento = new Date('2023-08-01T00:00:00').getTime();
    const countdownElement = document.getElementById('countdown');

    setInterval(function() {
        const agora = new Date().getTime();
        const diferenca = dataLancamento - agora;

        // Calcular dias, horas, minutos e segundos restantes
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Exibir o contador na página
        countdownElement.innerHTML = `Lançamento em ${dias}d ${horas}h ${minutos}m ${segundos}s`;

        // Quando a contagem regressiva terminar, exibir uma mensagem
        if (diferenca < 0) {
            clearInterval(contador);
            countdownElement.innerHTML = "Lançamento!";
        }
    }, 1000); // Atualizar a cada segundo
}

// Chamar as funções para começar a alternar os slogans e atualizar a contagem regressiva após o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    alternarSlogan();
    atualizarContagemRegressiva();
});