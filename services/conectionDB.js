const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/teste',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open',()=>{
    console.log('conexão estabelecida');

}).on('erro', (err)=>{
    console.log('error: ', err);

});