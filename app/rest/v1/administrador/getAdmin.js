const {Router} = require('express')
const Admin = require('../../../../database/schemas/Administrador')

module.exports = Router().get('/rest/v1/administrador', async (req, res) => {
    const administrador = await Admin.find()
        
    res.send(administrador)
})