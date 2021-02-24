const {Router} = require('express')
const Paciente = require('../../../../database/schemas/Usuario')
const auth = require('../middleware/authorizationPaciente')
const authorize = require('../middleware/role')
const Role = require('../../../helpers/role')
//endpoint obtener listado de pacientes
module.exports = Router().get('/rest/v1/paciente', [ auth, authorize([Role.Admin])] , async (req, res) => {
    const pacientes = await Paciente
        .find()
        .sort({apellido: 1})
        .select({nombre: 1, apellido: 1, email: 1})
        .populate('Referencia', 'referencia')
    res.send(pacientes)
})