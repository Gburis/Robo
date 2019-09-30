const config = require('../config')
const mongoose = require('mongoose');

const db = {
    start:async ()=>{
        mongoose.Promise = global.Promise;

        mongoose.connect(config.database,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });

        mongoose.connection.once('open',()=>{
            console.log('Conexão com mongoDB estabelecida '+new Date());
        
        }).on('erro', (err)=>{
            console.log('error: ', err);
        
        });
    },
    close:async ()=>{
        mongoose.connection.close(()=>{
            console.log('Conexão com mongoDB encerrada '+new Date());

        });
    }
}

module.exports = db;