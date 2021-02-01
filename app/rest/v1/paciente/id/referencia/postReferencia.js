const {Router} = require('express')
const {referenciaSchema} = require('../../../../../../database/schemas/Referencia')

module.exports = Router().post('/rest/v1/paciente/:id/referencia', async (req, res) => {
    const {id} = req.params
   
    const {referencia} = req.body
    const db = req.db
    const referenciaPaciente = new referenciaSchema ({
        nombre: nombre,
        referencia,
        paciente: paciente
    })
    const result = await referenciaPaciente.save()
    res.end(`referencia del paciente ${id} posteada, ${db.Referencia}` )

})