require('dotenv').config()
const {PORT} = process.env
const app = require('./app/createExpressApp')

const http = require('http')
//servidor creado y escuchando
http.createServer(app).listen(PORT, () => console.log('server ready'))