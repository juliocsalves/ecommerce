

try {    
    function loadConfigData() {
        console.log('Iniciando o carregamento do JSON...');
        fetch('/sistema/json/config.json')
            .then(response => {
                console.log('Resposta recebida:', response);
                // Verifica se a resposta foi bem-sucedida
                if (response.ok) {
                    console.log('Carregamento do JSON: true');
                    return response.json();  // Retorna o conteúdo JSON se carregado com sucesso
                } else {
                    console.log('Carregamento do JSON: false');
                    throw new Error('Falha ao carregar o JSON');
                }
            })
            .then(data => {
                // Aqui você pode trabalhar com os dados carregados
                console.log('Dados do JSON:', data);
                // Armazena os dados em um array
                const configArray = Object.entries(data);
                console.log('Array de Configurações:', configArray);

                // Exemplo de como usar os dados carregados
                document.getElementById('siteName').value = data.siteName || '';
                document.getElementById('siteEmail').value = data.siteEmail || '';
                document.getElementById('welcomeTitle').value = data.welcomeTitle || '';
                document.getElementById('siteMessage').innerText = data.siteMessage || '';
            })
            .catch(error => {
                console.error('Erro ao carregar o JSON:', error);
            });
    }

    // Chama a função quando o DOM for carregado
    document.addEventListener('DOMContentLoaded', loadConfigData);
    loadConfigData();
} catch {
    console.log('fudeu');
}