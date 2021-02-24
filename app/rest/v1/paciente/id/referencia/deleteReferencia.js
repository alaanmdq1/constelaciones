const {Router} = require('express')
const Referencia = require('../../../../../../database/schemas/Referencia')
const Usuario = require('../../../../../../database/schemas/Usuario')
const auth = require('../../../middleware/authorizationPaciente')

const authorize = require('../../../middleware/role')
const Role = require('../../../../../helpers/role') 

//borrar referencia del tablero
module.exports = Router().delete('/rest/v1/paciente/:id/:referencia', [auth, authorize([Role.Admin, Role.User])] , async (req, res) => {
    const usuario = await Usuario.findById(req.params.id) 
    if(!usuario){
        return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
    }
    const referencia = await Referencia.findByIdAndDelete(req.params.referencia)
    if(!referencia){
        return res.status(404).send('La referencia que solicita no se encuentra en la Base de Datos')
    }
    res.status(200).send('referencia borrada de la base de datos')
})