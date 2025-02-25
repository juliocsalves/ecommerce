document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById("dynamic-content-container");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Função para carregar conteúdo dinâmico
    function loadContent(pages, category = "") {
        contentContainer.innerHTML = ""; // Limpa apenas o conteúdo dinâmico

        const pagesArray = Array.isArray(pages) ? pages : [pages]; // Garante que seja um array

        pagesArray.forEach(page => {
            let url = `content/${page}.html`;

            if (page === "home") {
                loadContent(["banner", "products"]); // Carrega apenas os conteúdos dinâmicos da home
                return;
            }

            if (page === "products" && category) {
                url = `content/products.html?category=${category}`;
            }

            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
                    return response.text();
                })
                .then(data => {
                    contentContainer.innerHTML += data;
                })
                .catch(error => console.error("Erro ao carregar conteúdo:", error));
        });
    }

    // Carregar conteúdo inicial da home
    loadContent(["banner", "products"]);

    // Delegação de eventos para links de navegação
    document.body.addEventListener("click", function (event) {
        const target = event.target.closest(".nav-link, .dropdown-item"); // Captura cliques nos links da navbar
        if (!target) return;

        event.preventDefault();
        const page = target.getAttribute("id")?.replace("load", "").toLowerCase();
        const category = target.getAttribute("data-category");

        if (page) loadContent(page);
        if (category) loadContent("products", category);

        // Fecha a navbar se não for o menu "Produtos"
        if (!target.classList.contains("dropdown-toggle")) {
            navbarCollapse.classList.remove("show");
        }
    });

    // Fecha a navbar ao clicar fora dela
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".navbar")) {
            navbarCollapse.classList.remove("show");
        }
    });
});
