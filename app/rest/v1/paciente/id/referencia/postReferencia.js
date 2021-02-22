const {Router} = require('express')
const Referencia = require('../../../../../../database/schemas/Referencia')
const Paciente = require('../../../../../../database/schemas/Paciente')
const authPaciente = require('../../../middleware/authorizationPaciente')
const authorize = require('../../../middleware/role')
const Role = require('../../../../../helpers/role')

module.exports = Router().post('/rest/v1/paciente/:id/referencia', [authPaciente, authorize([Role.User])], async (req, res) => {
    const {id} = req.params
    const paciente = await Paciente.findById(req.params.id)
    if (!paciente) return res.status(400).send('No se ha encontrado el paciente con ese ID')

    const referenciaPaciente = new Referencia ({
        nombre: req.body.nombre,
        referencia: req.body.referencia,
        paciente: req.params.id
    })
    try {
        const result = await referenciaPaciente.save()
        res.status(201).send(`referencia del paciente ${referenciaPaciente.nombre} posteada, ${referenciaPaciente.referencia}` )
    } catch(e) {
        throw new Error(e)
    }

})