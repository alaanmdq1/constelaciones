const {Router} = require('express')
const Referencia = require('../../../../../../database/schemas/Referencia')
const Paciente = require('../../../../../../database/schemas/Paciente')

module.exports = Router().post('/rest/v1/paciente/:id/referencia', async (req, res) => {
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
        res.status(201).send(`referencia del paciente ${id} posteada, ${result}` )
    } catch(e) {
        throw new Error(e)
    }

})