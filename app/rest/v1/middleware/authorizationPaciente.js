const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
dotEnv.config()

const {SECRET_KEY_PACIENTE } = process.env

function authPaciente(req, res, next){
    const token = req.header('Authorization')
    if(!token) return res.status(401).send('Acceso denegado, necesita un token valido')

    try {
        const payload = jwt.verify(token, SECRET_KEY_PACIENTE)
        req.usuario = payload
        next()
    } catch(e) {
        res.status(400).send('Acceso denegado, token invalido')
    }
}

module.exports = authPaciente