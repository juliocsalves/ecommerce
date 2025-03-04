
// Importando o arquivo JSON diretamente
//const dados = require('../json/config.json'); 

// Exibindo os dados no console
//console.log(dados);
//console.log(dados.siteMessage);

// dados.forEach(pessoa => {
//     if (Number(pessoa.idade) > 30) {
//         console.log(`Nome: ${pessoa.nome}`);
//         console.log(`Idade: ${pessoa.idade}`);
//         console.log(`Hobbies: ${pessoa.hobbies.join(', ')}`);
//         console.log('----------------------');
//     }
// })


    
const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '../json/config.json');

async function buscarArquivo() {
    try {
        const arquivo = await fs.readFile(filePath, 'utf-8').then(); // Lendo o arquivo corretamente;
        const textoDoArquivo = JSON.parse(arquivo); // Convertendo o arquivo para JSON
        console.log(`
            Nome do site: ${textoDoArquivo.siteName},
            E-mail: ${textoDoArquivo.siteEmail},
            Boas Vindas: ${textoDoArquivo.welcomeTitle},
            Mensagem de Boas Vindas: ${textoDoArquivo.siteMessage},
            Logo do site: ${textoDoArquivo.siteLogo}            
            `); // Exibe o conteúdo do arquivo   

    } catch (error) {
        console.log('Erro ao ler o arquivo:', error);

    } finally {
        console.log('Finalizou a busca pelo arquivo');
    }
}

buscarArquivo();
