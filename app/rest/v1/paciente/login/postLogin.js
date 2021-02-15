const {Router} = require('express')
const Paciente = require('../../../../../database/schemas/Paciente')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

module.exports = Router().post('/rest/v1/paciente/login',[
    //chekea validacion
    check('email').isEmail(),
    check('password').isStrongPassword()],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()})
        }
        //chekea si el email es correcto
        let usuario = await Paciente.findOne({email: req.body.email})
        if(!usuario) return res.status(400).send('E-mail o contraseña invalido')

        //chekea si la contraseña es correcta
        const validPassword = await bcrypt.compare(req.body.password, usuario.password)
        if(!validPassword) return res.status(400).send('E-mail o contraseña invalido')
    
        res.send(`El paciente ${usuario.nombre} ha iniciado sesion con exito` )
    })