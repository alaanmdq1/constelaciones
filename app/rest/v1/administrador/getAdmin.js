const {Router} = require('express')
const Admin = require('../../../../database/schemas/Administrador')
const authAdministrador = require('../middleware/authorizationAdmin')
const authorize = require('../middleware/role')
const Role = require('../../../helpers/role')


module.exports = Router().get('/rest/v1/administrador', [authAdministrador, authorize(Role.Admin)], async (req, res) => {
    const administrador = await Admin.find()
        
    res.send(administrador)
})