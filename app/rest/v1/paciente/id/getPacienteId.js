const {Router} = require('express')
const Paciente = require('../../../../../database/schemas/Usuario')
const auth = require('../../middleware/authorizationPaciente')
const authorize = require('../../middleware/role')
const Role = require('../../../../helpers/role')
//obtener paciente por id
module.exports = Router().get('/rest/v1/paciente/:id', [auth, authorize([Role.Admin])] , async (req, res) => {
    //const pacienteId = req.params.id
    const paciente = await Paciente
        .findById(req.params.id)
        .populate('referencia', 'referencia')
    if(!paciente){
        return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
    }
    res.send(paciente)
})