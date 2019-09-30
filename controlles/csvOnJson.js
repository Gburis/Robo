const request = require('request');
const config = require('../config');
const csv = require('csvtojson');

const header = [
        'cnpj',
        'tipo_pessoa',
        'categoria',
        'susep',
        'nome',
        'ender',
        'bairro',
        'cidade',
        'estado',
        'cep',
        'telef',
        'fax',
        'situacao',
        'dt_conc',
        'ult_alt'
    ];

const fileCsv = {
    convert:async ()=>{
        console.log('Lendo CSV...');
        return await csv(
            { 
                delimiter: ";",
                nohearder:true,
                headers: header 
            }
        ).fromStream(request.get(config.urlSusep))
        .subscribe(async(json)=>{
            return await json;
        });
    }
}

module.exports = fileCsv;

