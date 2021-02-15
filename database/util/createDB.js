const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const glob = require('glob')
const { basename, extname } = require('path')

dotEnv.config()

const { MONGO_DB_URL} = process.env

module.exports = () => new Promise ((resolve, reject) => {
//logica de coneccion a la data base
    
    mongoose.set('debug', true)
    mongoose.set('useCreateIndex', true)

    mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false})
    
    //require de los schemas 
    //funciones del paquete path que resumen el nombre los modelos llevandolos a objetos de js
    const db = glob.sync('./schemas/**/*.js', { cwd: __dirname })
    .map(filename => ({
      name: basename(filename).replace(extname(filename), ''),
      schema: require(filename),
    }))
    .filter(({ name, schema }) => schema instanceof mongoose.Schema)
    .map(({name, schema}) => mongoose.model(name, schema))
    .reduce((db, model) => ({
      ...db,
      [model.modelName]: model,
    }), {})
    
    mongoose.connection
        .on('error', error => reject(error))
        .once('open', () => resolve(db))
        
})


   
    
        