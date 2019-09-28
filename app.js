const db = require('./controlles/conectionDB');


const Job = {
    readFile:()=>{

    },
    saveToMongo:()=>{

    },
    init:()=>{
        db.start();
    }
}

Job.init();