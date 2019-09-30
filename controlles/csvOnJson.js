const file = require('fs');
const csv = require('csvtojson');

const fileCsv = {
    convert:async ()=>{
        const csvFilePath= './csv/pokemon.csv';
        return await csv().fromFile(csvFilePath);
    }
}

module.exports = fileCsv;

