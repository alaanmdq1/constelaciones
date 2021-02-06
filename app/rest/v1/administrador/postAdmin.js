const {Router} = require('express')
const {adminSchema} = require('../../../../database/schemas/Administrador')

module.exports = Router().post('/rest/v1/:administrador', async (req, res) => {
    const {administrador} = req.params
   
    const {password} = req.body
    const db = req.db
    const usuarioAdmin = new adminSchema ({
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password
    })
    const result = await usuarioAdmin.save()
    res.status(201).end(`administrador ${administrador} registrado, ${db.Administrador}` )
})