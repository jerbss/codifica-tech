// script.js

// Função para validar o formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coletar valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const feedback = document.getElementById('feedback'); // Elemento para feedback visual

    // Limpa mensagens anteriores
    feedback.textContent = '';
    feedback.className = '';

    // Validação simples
    if (nome && email && mensagem) {
        // Validação do formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedback.textContent = 'Por favor, insira um e-mail válido.'; // Mensagem de erro para e-mail inválido
            feedback.className = 'error'; // Classe CSS para estilo de erro
            return; // Interrompe a execução da função
        }

        // Mensagem de sucesso
        feedback.textContent = 'Mensagem enviada com sucesso!';
        feedback.className = 'success'; // Classe CSS para estilo de sucesso

        // Aqui você pode adicionar o código para enviar os dados para um servidor ou processá-los

        // Resetar o formulário após o envio
        document.getElementById('contact-form').reset();
    } else {
        feedback.textContent = 'Por favor, preencha todos os campos.'; // Mensagem de erro
        feedback.className = 'error'; // Classe CSS para estilo de erro
    }
});

// Inicializa o Swiper
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Habilitar o loop
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
