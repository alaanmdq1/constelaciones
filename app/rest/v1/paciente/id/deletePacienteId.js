const {Router} = require('express')

module.exports = Router().delete('/rest/v1/paciente/:id', (req, res) => {
    const pacienteId = req.params.id
    res.end(pacienteId)
})