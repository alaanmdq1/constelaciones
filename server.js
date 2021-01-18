require('dotenv').config()
const {PORT} = process.env
const app = require('./app/createExpressApp')

const http = require('http')
const { connection } = require('./database/util/createDB')

//db connect

connection()
//servidor creado y escuchando
http.createServer(app).listen(PORT, () => console.log('server ready'))