require('dotenv').config()
const {PORT, MONGO_DB_URL} = process.env
const http = require('http')
const createExpressApp = require('./app/createExpressApp')
//db conexion
require('./database/util/createDB')()
    .then(db => {
        console.log('Database connected Succesfully')
        //express se integra con la data base
        const app = createExpressApp({ db })
        //const server = http.createServer(app)
        //servidor creado y escuchando
        http.createServer(app).listen(PORT, () => console.log(`server ready on ${PORT}`))
    })




