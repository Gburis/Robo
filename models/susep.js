const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const susepSchema = new Schema({
    corretores:[
        {
           cnpj: { type: String, required: false },
           tipo_pessoa: { type: String, required: false },
           cod_susep: { type: String, required: false },
           nome: { type: String, required: false },
           ender: { type: String, required: false },
           bairro: { type: String, required: false },
           cidade: { type: String, required: false },
           estado: { type: String, required: false },
           cep: { type: Number, required: false },
           telef: { type: Number, required: false },
           situacao: { type: String, required: false },
           dt_conc: { type: Date, required: false },
           ult_alt: { type: Date, required: false }
        }
    ]
});

const Susep = mongoose.model('susep', susepSchema);

module.exports = Susep;