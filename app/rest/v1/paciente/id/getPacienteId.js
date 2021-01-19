const {Router} = require('express')

module.exports = Router().get('/rest/v1/paciente/id', (req, res) => {
    const pacienteId = req.params.id
    res.end(pacienteId)
})