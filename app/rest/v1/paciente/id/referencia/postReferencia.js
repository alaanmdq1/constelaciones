const {Router} = require('express')
const {referenciaSchema} = require('../../../../../../database/schemas/Referencia')

module.exports = Router().post('/rest/v1/paciente/id/:id/referencia', async (req, res) => {
    const {id} = req.params
   
    const {referencia} = req.body
    const db = req.db
    const referenciaPaciente = new referenciaSchema ({
        nombre: nombre,
        referencia,
        paciente: paciente
    })
    try {
        const result = await referenciaPaciente.save()
        res.status(201).end(`referencia del paciente ${id} posteada, ${db.Referencia}` )
    } catch(e) {
        throw new Error(e)
    }

})