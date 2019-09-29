const mongoose = require('mongoose');

const db = {
    start:async ()=>{
        mongoose.Promise = global.Promise;

        mongoose.connect('mongodb://localhost:27017/susep',{
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });

        mongoose.connection.once('open',()=>{
            console.log('1: conexão estabelecida');
        
        }).on('erro', (err)=>{
            console.log('error: ', err);
        
        });
    },
    close:async ()=>{
        mongoose.connection.close(()=>{
            console.log('3: conexão encerrada');

        });
    }
}

module.exports = db;