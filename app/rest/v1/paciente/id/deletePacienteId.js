const {Router} = require('express')
const Paciente = require('../../../../../database/schemas/Paciente')
const authAdministrador = require('../../middleware/authorizationAdmin')
const authorize = require('../../middleware/role')
const Role = require('../../../../helpers/role')

module.exports = Router().delete('/rest/v1/paciente/:id', [authAdministrador, authorize([Role.Admin])] , async (req, res) => {
    const paciente = await Paciente.findByIdAndDelete(req.params.id) 
        if(!paciente){
           return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
        }
    //const pacienteId = req.params.id
    res.status(200).send('Paciente borrado de la base de datos')
})