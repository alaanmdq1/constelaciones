const {Router} = require('express')
const Referencia = require('../../../../../../database/schemas/Paciente')
const authPaciente = require('../../../middleware/authorizationPaciente')
const authAdministrador = require('../../../middleware/authorizationAdmin')
const authorize = require('../../../middleware/role')
const Role = require('../../../../../helpers/role') 


module.exports = Router().delete('/rest/v1/paciente/:id/referencia', [authPaciente, authAdministrador, authorize([Role.Admin, Role.User])] , async (req, res) => {
    const referencia = await Referencia.findByIdAndDelete(req.params.id) 
        if(!referencia){
           return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
        }
    //const pacienteId = req.params.id
    res.status(200).send('referencia borrada de la base de datos')
})