const {Router} = require('express')
const Referencia = require('../../../../../../database/schemas/Referencia')

module.exports = Router().post('/rest/v1/paciente/:id/referencia', async (req, res) => {
    const {id} = req.params

    const referenciaPaciente = new Referencia ({
        nombre: req.body.nombre,
        referencia: req.body.referencia,
        paciente: req.body.paciente
    })
    try {
        const result = await referenciaPaciente.save()
        res.status(201).send(`referencia del paciente ${id} posteada, ${result}` )
    } catch(e) {
        throw new Error(e)
    }

})