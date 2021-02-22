const {Router} = require('express')
const Paciente = require('../../../../../database/schemas/Paciente')
const {check, validationResult} = require('express-validator')
const authPaciente = require('../../middleware/authorizationPaciente')
const authorize = require('../../middleware/role')
const Role = require('../../../../helpers/role')

module.exports = Router().put('/rest/v1/paciente/:id', [
    //chekea validacion
    check('nombre').isLength({min: 3}),
    check('apellido').isLength({min: 3}),
    check('email').isEmail(),
    check('password').isStrongPassword()
], [authPaciente, authorize(Role.User)],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()})
        }
        //actualizacion del paciente
        const paciente = await Paciente.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password
        },
        {
            new: true
        }) 
        if(!paciente){
           return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
        }
        //const db = req.db
        
        //guardado del paciente en la base de datos
        //const result = await paciente.save()
        res.status(200).send(paciente)
    })