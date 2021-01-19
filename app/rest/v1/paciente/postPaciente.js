const {Router} = require('express')

module.exports = Router().get('/rest/v1/paciente', (req, res) => {
    const paciente = req.params.id
    res.end(paciente)
})