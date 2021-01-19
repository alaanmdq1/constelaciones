const {Router} = require('express')

module.exports = Router().get('/rest/v1/administrador', (req, res) => {
    
    res.end("admin")
})