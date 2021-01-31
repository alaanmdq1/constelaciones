const {Router} = require('express')

module.exports = Router().post('/rest/v1/paciente', (req, res) => {
    const paciente = req.params.id
    res.end(paciente)
})