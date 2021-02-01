const {Router} = require('express')
const {pacienteSchema} = require('../../../../database/schemas/Paciente')

module.exports = Router().post('/rest/v1/:paciente', async (req, res) => {
    const {paciente} = req.params
   
    const {password} = req.body
    const db = req.db
    const usuario = new PacienteSchema ({
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password
    })
    const result = await usuario.save()
    res.end(`paciente ${paciente} registrado, ${db.Paciente}` )
})