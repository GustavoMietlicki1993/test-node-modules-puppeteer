const puppeteer = require('puppeteer');



(async () => {

    let monitoramentoItems = [
        'rws-legacy-ecliente',
        'rws-portal-autentication-bra'

    ]
    // Iniciar uma instância do navegador
    const browser = await puppeteer.launch();

    // Abrir uma nova página
    const page = await browser.newPage();

    // Navegar para uma URL
    await page.goto('https://github.com/GustavoMietlicki1993');


    await monitoramentoItems.forEach((monitoramentoItem) => {

        // Preencher um formulário
        page.type('#campo-nome', 'Seu Nome');
        page.type('#campo-email', 'seuemail@example.com');

        // Clicar em um botão
        page.click('#botao-enviar');

        // Aguardar um tempo para a página carregar após o clique
        page.waitForTimeout(2000);

        // Tirar um screenshot da página
        page.screenshot({ path: 'pagina.png' });

        //   Fechar o navegador
        browser.close();

    })

})();
