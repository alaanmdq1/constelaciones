const {Router} = require('express')
const Paciente = require('../../../../../database/schemas/Paciente')
const {check, validationResult} = require('express-validator')

module.exports = Router().put('/rest/v1/paciente/id/:id', [
    //chekea validacion
    check('nombre').isLength({min: 3}),
    check('apellido').isLength({min: 3}),
    check('email').isEmail(),
    check('password').isStrongPassword()
], 
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()})
        }
        const paciente = await Paciente.findById(paciente => Paciente.id === parseInt(req.params.id)) 
        if(!paciente){
           return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
        }
        const db = req.db
        //parametros actualizables
        paciente.nombre = req.body.nombre
        paciente.apellido = req.body.apellido
        paciente.password = req.body.password
        //guardado del paciente en la base de datos
        const result = await paciente.save()
        res.status(200).send(Result)
    })