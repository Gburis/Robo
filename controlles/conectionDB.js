const mongoose = require('mongoose');

const db = {
 
    start:()=>{
        mongoose.connect('mongodb://localhost:27017/susep',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.once('open',()=>{
            console.log('conexão estabelecida');
        
        }).on('erro', (err)=>{
            console.log('error: ', err);
        
        });
    },
    close:()=>{
        mongoose.connection.close(()=>{
            console.log('conexão encerrada');
        });
    }
}

module.exports = db;