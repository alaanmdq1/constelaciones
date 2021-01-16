const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const rootRouter = require('./rest/createApiRouter')()
//modulo de aplicacion express para api de servidor con base de datos como parametro
module.exports = () => express()
    .use(cors())
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .options('*', cors())
    .use(express.static('/public'))
    //aqui va db
    .use(rootRouter)
    .use((error, req, res, next) => {
    consoel.error(error)
    res.status(error.status || 500).json({ error })
    })