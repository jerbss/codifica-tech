
![Logo](https://i.imgur.com/Zlnh5gn.png)

# Desenvolvendo uma Landing Page Completa

Este projeto consiste na criação de uma landing page moderna e interativa, desenvolvida com HTML, CSS, e JavaScript. O objetivo é aplicar técnicas avançadas de front-end, incluindo a integração com bibliotecas externas e consumo de APIs, para criar uma experiência de usuário envolvente e funcional.

**Objetivo**: Construir uma página que combine design atrativo com interatividade, utilizando:
- **HTML, CSS, JavaScript** para estrutura e interatividade.
- **Bibliotecas externas** para sliders e animações.
- **APIs** para exibir conteúdos dinâmicos em seções específicas, como "Serviços" e "Testemunhos".



## Funcionalidades

Esta landing page apresenta várias funcionalidades pensadas para melhorar a experiência do usuário e a interatividade, incluindo:

- **Slider Interativo**: Carrossel dinâmico na seção inicial, destacando os principais serviços/produtos da empresa, com navegação e transições suaves, implementado com **Swiper.js** ou **Slick Slider**.
- **Seções Dinâmicas via API**: Consumo de APIs externas para preencher as seções de "Serviços" e "Testemunhos" com dados reais ou simulados, proporcionando conteúdo atualizado e relevante.
- **Formulário de Contato com Validação**: Formulário na seção de contato, com validação em JavaScript para garantir que todos os campos obrigatórios estejam preenchidos corretamente antes do envio.
- **Animações ao Rolagem**: Utilização da biblioteca **AOS.js** para adicionar animações que revelam os depoimentos dos clientes à medida que o usuário rola a página.
- **Design Responsivo**: A página é responsiva e adaptável a dispositivos móveis e desktops, utilizando media queries ou o framework **Bootstrap** ou **Tailwind CSS**.
- **Tratamento de Erros**: Tratamento de mensagens de erro para garantir que problemas nas APIs ou validações sejam comunicados claramente ao usuário.
## Stack Utilizada

Para o desenvolvimento desta landing page, foram utilizadas as seguintes tecnologias e bibliotecas:

- **HTML5**: Para a estruturação do conteúdo e semântica da página.
- **CSS3**: Para a estilização e layout, garantindo uma aparência moderna e atrativa.
- **JavaScript**: Para interatividade, manipulação do DOM e consumo de APIs.
- **Swiper.js ou Slick Slider**: Bibliotecas utilizadas para implementar o slider/carrossel de imagens.
- **AOS.js**: Biblioteca para animações de rolagem, que melhora a dinâmica da apresentação de conteúdos.
- **Bootstrap ou Tailwind CSS**: Frameworks CSS para garantir que o design seja responsivo e adaptável a diferentes tamanhos de tela.
- **EmailJS**: Para integração do formulário de contato, permitindo o envio de mensagens diretamente para um e-mail.

Essa combinação de tecnologias proporciona uma base sólida para criar uma experiência de usuário rica e interativa.
## Planejamento das Funcionalidades

O desenvolvimento da landing page será realizado em etapas, com foco na implementação de funcionalidades interativas e responsivas. A seguir, estão descritas as funcionalidades planejadas e como serão implementadas:

1. **Slider Interativo**:
   - **Objetivo**: Criar um carrossel dinâmico para destacar os principais serviços ou produtos.
   - **Implementação**: Utilizar a biblioteca **Swiper.js** para implementar um slider com botões de navegação e indicadores de slides. O conteúdo do slider será alimentado por uma API externa que fornecerá imagens e descrições dos produtos.

2. **Seções Dinâmicas via API**:
   - **Objetivo**: Carregar conteúdo dinâmico para as seções de "Serviços" e "Testemunhos".
   - **Implementação**: Utilizar a função `fetch()` do JavaScript para fazer requisições a APIs externas. Os dados retornados serão usados para preencher as informações das seções de forma assíncrona, garantindo que o conteúdo esteja sempre atualizado.

3. **Formulário de Contato com Validação**:
   - **Objetivo**: Permitir que os usuários entrem em contato através de um formulário.
   - **Implementação**: Criar um formulário com campos para nome, email, telefone e mensagem. Usar validação em JavaScript para verificar se todos os campos obrigatórios estão preenchidos corretamente antes de permitir o envio. O envio será feito utilizando a API **EmailJS**.

4. **Animações ao Rolagem**:
   - **Objetivo**: Melhorar a experiência do usuário com animações sutis ao rolar a página.
   - **Implementação**: Integrar a biblioteca **AOS.js** (Animate On Scroll) para animar a entrada de elementos, como os depoimentos, à medida que o usuário rola para baixo. Isso criará uma apresentação mais dinâmica e envolvente.

5. **Design Responsivo**:
   - **Objetivo**: Garantir que a página funcione bem em dispositivos móveis e desktops.
   - **Implementação**: Utilizar media queries no CSS e considerar o uso do framework **Bootstrap** ou **Tailwind CSS** para facilitar a responsividade e garantir que todos os elementos da página se adaptem a diferentes tamanhos de tela.

6. **Tratamento de Erros**:
   - **Objetivo**: Informar o usuário sobre qualquer problema que ocorra durante a execução da página.
   - **Implementação**: Implementar tratamento de erros nas requisições à API e no envio do formulário, exibindo mensagens amigáveis como "Erro ao carregar os serviços" ou "Erro ao enviar a mensagem". Isso aumentará a usabilidade e a confiança do usuário na aplicação.

Essa abordagem estruturada ajudará a garantir que todas as funcionalidades sejam implementadas de forma eficiente e organizada, resultando em uma landing page funcional e atraente.
## Roadmap

O desenvolvimento da landing page será realizado seguindo as etapas abaixo:

- **Planejamento e Estruturação**:
  - Definição do layout e prototipagem da landing page.
  - Criação da estrutura HTML e CSS.

- **Desenvolvimento Inicial**:
  - Implementação do slider interativo.
  - Desenvolvimento das seções "Sobre" e "Serviços".

- **Integração de Funcionalidades**:
  - Integração das APIs para as seções dinâmicas.
  - Criação do formulário de contato com validação.

- **Aprimoramento e Testes**:
  - Implementação de animações com AOS.js.
  - Testes e correção de bugs.

- **Finalização e Documentação**:
  - Preparação do README e documentação do projeto.
## Referência

As seguintes referências foram utilizadas como base para o desenvolvimento deste projeto:

- **Documentação do HTML5**: [MDN Web Docs - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- **Documentação do CSS3**: [MDN Web Docs - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- **Documentação do JavaScript**: [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Swiper.js**: [Documentação do Swiper.js](https://swiperjs.com/)
- **AOS.js**: [Documentação do AOS.js](https://michalsnik.github.io/aos/)
- **EmailJS**: [Documentação do EmailJS](https://www.emailjs.com/docs/)
- **Bootstrap**: [Documentação do Bootstrap](https://getbootstrap.com/docs/)
## Rodando Localmente

Para executar a landing page localmente, siga os passos abaixo:

1. **Clone o repositório**:
   - Execute o seguinte comando no terminal:
     ```bash
     git clone https://github.com/seu_usuario/nome_do_repositorio.git
     ```

2. **Acesse o diretório do projeto**:
   - Navegue até a pasta do projeto:
     ```bash
     cd nome_do_repositorio
     ```

3. **Abra o arquivo HTML**:
   - Abra o arquivo `index.html` em um navegador de sua escolha.

4. **Instalação de dependências (opcional)**:
   - Se você estiver utilizando um gerenciador de pacotes como o npm, execute:
     ```bash
     npm install
     ```

5. **Inicie um servidor local (opcional)**:
   - Para um melhor desenvolvimento, você pode usar o **Live Server** do Visual Studio Code ou executar um servidor local:
     ```bash
     npx http-server .
     ```

Agora você deve conseguir visualizar e interagir com a landing page localmente. Sinta-se à vontade para modificar e experimentar as funcionalidades!
