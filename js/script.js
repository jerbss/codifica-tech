// Inicializa o EmailJS com sua chave pública
emailjs.init("ABa7JYqtsmSHpXndE"); // Certifique-se de que esse é o User ID correto

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar valores dos campos
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('telefone').value;
    const message = document.getElementById('mensagem').value;
    const feedbackElement = document.getElementById('feedback');

    // Limpa mensagens anteriores
    feedbackElement.textContent = '';
    feedbackElement.className = '';

    // Validação simples
    if (name && email && message) {
        // Validação do formato do e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedbackElement.textContent = 'Por favor, insira um e-mail válido.';
            feedbackElement.className = 'error';
            return;
        }

        // Enviar e-mail via EmailJS
        emailjs.send("service_m0iw94c", "template_oth9ogu", {
            nome: name,
            email: email,
            telefone: phone,
            mensagem: message
        })
        .then(function(response) {
            feedbackElement.textContent = 'Mensagem enviada com sucesso!';
            feedbackElement.className = 'success';
            document.getElementById('contact-form').reset();
        })
        .catch(function(error) {
            feedbackElement.textContent = 'Erro ao enviar a mensagem. Tente novamente.';
            feedbackElement.className = 'error';
            console.error('Erro ao enviar:', error);
        });        
    } else {
        feedbackElement.textContent = 'Por favor, preencha todos os campos.';
        feedbackElement.className = 'error';
    }
});

// Inicializa o Swiper para o carrossel
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
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

// Função para carregar os serviços (exemplo com fetch)
async function loadServices() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const servicesContainer = document.getElementById('servicos-container');
        const fragment = document.createDocumentFragment();

        data.slice(0, 3).forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'servico-card';
            serviceCard.innerHTML = `
                <i class="fas fa-code"></i>
                <h3>${service.title}</h3>
                <p>${service.body}</p>
            `;
            
            // Adiciona evento de clique ao card
            serviceCard.addEventListener('click', () => {
                alert(`Você clicou no serviço: ${service.title}`);
            });
            
            fragment.appendChild(serviceCard);
        });

        servicesContainer.appendChild(fragment);
    } catch (error) {
        console.error('Erro ao carregar os serviços:', error);
    }
}

// Inicializa animações com AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
});