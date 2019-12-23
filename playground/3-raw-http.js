const https = require('https');

const url = 'https://api.darksky.net/forecast/bf8714f355c2f58ac2d9613b8102a05c/40,-75';

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        //console.log(data);

        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();