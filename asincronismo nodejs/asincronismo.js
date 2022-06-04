const request = require('request'); 
request('https://api.coindesk.com/v1/bpi/currentprice.json', (error, response, body) => { 
    if (error) { 
        console.error(`No se envio la api: ${error.message}`); 
        return; 
    } 
    if (response.statusCode != 200) { 
        console.error(`Código de estado esperado 200 pero recibido
${response.statusCode}.`); 
        return; 
    } 
    console.log('procesando precio del btc'); 
    bitcoin = JSON.parse(body); 
    bitcoin.forEach(btc => { 
        console.log(`${btc['time']}, ${btc['code']},${btc['symbol']},${btc['rate']},${btc['description']},${btc['rate_float']},`);    
     }); 
    }); 