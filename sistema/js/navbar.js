document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar o conteúdo de cada página
    function loadPageContent(page) {
        fetch(`content/${page}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('dynamicContent').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar o conteúdo:', error));
    }

    // Função para adicionar evento de clique aos links do menu
    function setupMenuLinks(links) {
        links.forEach(({ id, page }) => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('click', function (event) {
                    event.preventDefault();
                    loadPageContent(page);
                    closeNavbar();
                });
            } else {
                console.error(`Elemento com ID ${id} não encontrado.`);
            }
        });
    }

    // Fecha a navbar ao clicar em qualquer link do menu ou submenu
    function closeNavbar() {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
            navbarToggler.click();
        }
    }

    // Configuração inicial
    loadPageContent('dashboard');
    
    setupMenuLinks([
        { id: 'manageProducts', page: 'products' },
        { id: 'manageUsers', page: 'users' },
        { id: 'manageOrders', page: 'orders' },
        { id: 'settings', page: 'config' },
        { id: 'dashboard', page: 'dashboard' }
    ]);
});
