const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const susepSchema = new Schema({
    cnpj: { type: String, required: false },
    tipo_pessoa: { type: String, required: false },
    susep: { type: String, required: false },
    nome: { type: String, required: false },
    ender: { type: String, required: false },
    bairro: { type: String, required: false },
    cidade: { type: String, required: false },
    estado: { type: String, required: false },
    cep: { type: String, required: false },
    telef: { type: String, required: false },
    fax: { type: String, required: false },
    situacao: { type: String, required: false },
    dt_conc: { type: String, required: false },
    ult_alt: { type: String, required: false }
});

const Susep = mongoose.model('susep', susepSchema);

module.exports = Susep;
