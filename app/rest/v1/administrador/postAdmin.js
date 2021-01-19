const {Router} = require('express')

module.exports = Router().post('/rest/v1/administrador', (req, res) => {
    const admin = req.params.id
    res.end(admin)
})