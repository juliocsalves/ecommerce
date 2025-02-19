// app.js

// Função para carregar conteúdo dinâmico
function loadContent(pages, category = '') {
    document.getElementById('dynamic-content-container').innerHTML = '';

    if (Array.isArray(pages)) {
        pages.forEach(function (page) {
            fetch(`content/${page}.html`)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('dynamic-content-container').innerHTML += data;
                })
                .catch(error => console.error('Erro ao carregar conteúdo:', error));
        });
    } else {
        let url = `content/${pages}.html`;
        if (category) {
            url = `content/products.html?category=${category}`; // Passando a categoria para o link
        }
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('dynamic-content-container').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
    }
}

// 📌 Carregar categoria específica ao clicar no dropdown do menu Produtos
document.querySelectorAll('.loadCategory').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const category = this.getAttribute('data-category'); // Pega o valor da categoria
        loadContent('products', category); // Passa a categoria para o conteúdo
    });
});

document.addEventListener('DOMContentLoaded', function () {
    loadContent(['banner', 'products']);
});

document.getElementById('loadHome').addEventListener('click', function (event) {
    event.preventDefault();
    loadContent(['banner', 'products']);
});

document.getElementById('loadAbout').addEventListener('click', function (event) {
    event.preventDefault();
    loadContent('about');
});

document.getElementById('loadContacts').addEventListener('click', function (event) {
    event.preventDefault();
    loadContent('contacts');
});

document.getElementById('loadLogin').addEventListener('click', function (event) {
    event.preventDefault();
    loadContent('login');
});

document.getElementById('loadRegister').addEventListener('click', function (event) {
    event.preventDefault();
    loadContent('register');
});

document.getElementById('loadCheckout').addEventListener('click', function (event) {
    event.preventDefault();
    loadContent('checkout');
});
