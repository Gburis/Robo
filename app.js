const db = require('./controlles/conectionDB');
const Susep = require('./models/susep');

const Job = {
    readFile:()=>{

    },
    saveAndUpadateToMongo: async ()=>{

        try{
            let susep = await Susep.find().limit(1); 
            const id = susep.length > 0 ? susep[0]._id : '';
            
            if(susep.length == 0){
                susep = new Susep(
                    {
                        corretores:[
                            {
                                cnpj: '51.765.387/0001-08',
                                tipo_pessoa: 'j',
                                cod_susep: '123Susep',
                                nome: 'Gabriel Olimpio',
                                ender: 'Rua Gino Arduini 391',
                                bairro: 'Umuarama',
                                cidade: 'Itanhaém',
                                estado: 'SP',
                                cep: 11740000,
                                telef: 13997051292,
                                situacao: 'Ativo',
                                dt_conc: new Date(),
                                ult_alt: new Date()
                            }
                        ]
                    }
                );
                console.log('3: Cadastros dos corretores realizado');

            }else{
                
                await Susep.updateOne({_id: id},
                    {
                        corretores:[
                            {
                                cnpj: '51.765.387/0001-03',
                                tipo_pessoa: 'j',
                                cod_susep: '123Susep',
                                nome: 'Rafael Olimpio 3',
                                ender: 'Rua Gino Arduini 393',
                                bairro: 'Umuarama',
                                cidade: 'Itanhaém',
                                estado: 'SP',
                                cep: 11740000,
                                telef: 13997051292,
                                situacao: 'Ativo',
                                dt_conc: new Date(),
                                ult_alt: new Date()
                            }
                        ]
                    }
                )
                console.log('3: Atualização dos cadastros realizada com exito');
            }
        }catch(err){
            console.log(err);
        }
    },
    init:async()=>{
        await db.start();
        await Job.saveAndUpadateToMongo();
        await db.close();
    }
}

Job.init();