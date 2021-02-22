const {Router} = require('express')
const Paciente = require('../../../../../database/schemas/Paciente')
const authAdministrador = require('../../middleware/authorizationAdmin')
const authorize = require('../../middleware/role')
const Role = require('../../../../helpers/role')

module.exports = Router().get('/rest/v1/paciente/:id', [authAdministrador, authorize([Role.Admin])] , async (req, res) => {
    //const pacienteId = req.params.id
    const paciente = await Paciente
        .findById(req.params.id)
        .populate('Referencia', 'referencia')
    if(!paciente){
        return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
    }
    res.send(paciente)
})