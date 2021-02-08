const {Router} = require('express')
const Paciente = require('../../../../database/schemas/Paciente')

module.exports = Router().get('/rest/v1/paciente', async (req, res) => {
    const pacientes = await Paciente
        .find()
        .sort({apellido: 1})
        .select({nombre: 1, apellido: 1, email: 1})
    res.send(pacientes)
})