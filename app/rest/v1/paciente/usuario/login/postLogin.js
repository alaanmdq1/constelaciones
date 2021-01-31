const {Router} = require('express')

module.exports = Router().post('/rest/v1/paciente/:usuario/login', (req, res) => {
    const usuario = req.params.id
    res.end(usuario)
})