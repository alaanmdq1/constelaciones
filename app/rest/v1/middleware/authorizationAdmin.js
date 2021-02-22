const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
dotEnv.config()

const {SECRET_KEY_ADMIN} = process.env

function authAdministrador(req, res, next){
    const token = req.header('Authorization')
    if(!token) return res.status(401).send('Acceso denegado, necesita un token de administrador valido')

    try {
        const payload = jwt.verify(token, SECRET_KEY_ADMIN)
        req.administrador = payload
        next()
    } catch(e) {
        res.status(400).send('Acceso denegado, token de administrador invalido')
    }
}

module.exports = authAdministrador