const {Router} = require('express')
const Paciente = require('../../../../database/schemas/Paciente')
const authAdministrador = require('../middleware/authorizationAdmin')
const authorize = require('../middleware/role')
const Role = require('../../../helpers/role')

module.exports = Router().get('/rest/v1/paciente', [authAdministrador, authorize(Role.Admin)] , async (req, res) => {
    const pacientes = await Paciente
        .find()
        .sort({apellido: 1})
        .select({nombre: 1, apellido: 1, email: 1})
        .populate('Referencia', 'referencia')
    res.send(pacientes)
})