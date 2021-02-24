const {Router} = require('express')
const Referencia = require('../../../../../../database/schemas/Referencia')
const Paciente = require('../../../../../../database/schemas/Usuario')
const authPaciente = require('../../../middleware/authorizationPaciente')
const authorize = require('../../../middleware/role')
const role = require('../../../../../helpers/role')
//crear referencia del tablero
module.exports = Router().post('/rest/v1/paciente/:id/referencia', [authPaciente, authorize([role.User])] , async (req, res) => {
    
    const paciente = await Paciente.findById(req.params.id)
    if (!paciente) return res.status(400).send('No se ha encontrado el paciente con ese ID')

    const referenciaPaciente = new Referencia ({
        nombre: req.body.nombre,
        referencia: req.body.referencia,
        paciente: req.params.id
    })
    try {
        const result = await referenciaPaciente.save()
        res.status(201).send(`referencia del paciente ${req.body.nombre} ${req.params.id} posteada, ${referenciaPaciente.referencia}` )
    } catch(error) {
        throw new Error(error)
    }

})