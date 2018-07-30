const Eos = require('eosjs');

const config = {
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    httpEndpoint: 'https://api.eosnewyork.io',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};

const eos = Eos(config);

// Promise
eos.getCurrencyStats('eosio.token', 'EOS')
    .then(result => console.log(result))
    .catch(error => console.error(error));

// callback
eos.getCurrencyStats('eosio.token', 'EOS',
    (error, result) => console.log(error, result));

// Parameters object
eos.getCurrencyStats({code: 'eosio.token', symbol: 'EOS'})
    .then(console.log);
