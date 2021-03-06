const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const rootRouter = require('./rest/createApiRouter')()
//modulo de aplicacion express para api de servidor con base de datos como parametro
module.exports = ({db}) => express()
    .use(cors())
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .options('*', cors())
    .use(express.static('./public'))
    .use(express.json())
    //devuelve datos del http req por consola
    .use(morgan('tiny'))
    //aqui va db syncronizada con todas las rutas de nuestros endpoints
    .use((req, res, next) => {
        req.db = db
        next()
    })
    //rutas
    .use(rootRouter)
    .use((error, req, res, next) => {
    console.error(error)
    res.status(error.status || 500).json({ error })
    })