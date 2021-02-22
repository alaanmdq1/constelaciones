const {Router} = require('express')
const Referencia = require('../../../../../../database/schemas/Paciente')
const authAdministrador = require('../../../middleware/authorizationAdmin')

const authorize = require('../../../middleware/role')
const Role = require('../../../../../helpers/role')

module.exports = Router().get('/rest/v1/paciente/:id/referencia', [authAdministrador, authorize([Role.Admin])] , async (req, res) => {
    const referencia = await Referencia.findById(req.params.id) 
    if(!referencia){
        return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
    }
    res.send(`Referencias del paciente ${req.params.id}, ${referencia}`)
})