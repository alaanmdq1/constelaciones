const {Router} = require('express')

module.exports = Router().get('/rest/v1/paciente', (req, res) => {
    
    res.end("pacientes")
})