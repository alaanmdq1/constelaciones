const {Router} = require('express')

module.exports = Router().post('/rest/v1/:paciente/login', (req, res) => {
    const {paciente} = req.params
    const {password} = req.body
    const db = req.db
    
    res.end(`login ${paciente}, ${db.Paciente}` )
})