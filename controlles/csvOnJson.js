const file = require('fs');
const csv=require('csvtojson')

const csvToJson = {
    readerCsv: async ()=>{
        const csvFilePath= './csv/pokemon.csv';
        const jsonArray = await csv().fromFile(csvFilePath);

        return jsonArray;
    }
} 

console.log(csvToJson.readerCsv());
