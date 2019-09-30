const db = require('./controlles/conectionDB');
const Susep = require('./models/susep');
const fileCsv = require('./controlles/csvOnJson');
const Job = {

    readFile: async ()=>{
        let susep =  await fileCsv.convert();
        return susep;
        
    },
    saveAndUpadateToMongo: async ()=>{
        try{
            let corretores = await Job.readFile();
            corretores.forEach( async (e, i)=>{
                let percente = ((i * 100) / corretores.length);    
                if(`${percente}`.length < 3) console.log(`${percente}%`);

                if(e.tipo_pessoa != 'F'){
                    susep = new Susep(e);
                    await susep.save();
                }
            })
            console.log('Cadastro dos corretores realizado');

        }catch(err){
            console.log(err);

        }
    },
    delete: async () =>{
        try{
            await Susep.deleteMany({});
            console.log('Deletando base antiga');
            console.log('Base deletada');

        }catch(err){
            console.log('erro ao deletar', err);

        }
    },
    init:async()=>{
        await db.start();
        await Job.delete();
        await Job.saveAndUpadateToMongo();
        await db.close();

    }

}

Job.init();