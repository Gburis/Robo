const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    
    Number: { type: String, required: false },
    Name: { type: String, required: false },
    Type_1: { type: String, required: false },
    Type_2: { type: String, required: false },
    Total: { type: String, required: false },
    HP: { type: String, required: false },
    Attack: { type: String, required: false },
    Defence: { type: String, required: false },
    Sp_Atk: { type: String, required: false },
    Sp_Def: { type: String, required: false },
    Speed: { type: String, required: false },
    Generation: { type: String, required: false },
    Legendary: { type: String, required: false }
    
});

const Pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = Pokemon;