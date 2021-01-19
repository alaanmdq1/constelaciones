const {Router} = require('express')

module.exports = Router().get('/rest/v1/paciente/id/referencia', (req, res) => {

    res.end(`Referencias del paciente${req.params.id}`)
})