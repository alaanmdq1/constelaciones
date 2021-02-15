const {Router} = require('express')
const Paciente = require('../../../../database/schemas/Paciente')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

//creando paciente
module.exports = Router().post('/rest/v1/paciente',[
    //chekea validacion
    check('nombre').isLength({min: 3}),
    check('apellido').isLength({min: 3}),
    check('email').isEmail(),
    check('password').isStrongPassword()], 
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()})
        }
        //chekea si el email ya existe
        let usuario = await Paciente.findOne({email: req.body.email})
        if(usuario) return res.status(400).send('Ese usuario ya existe')
        //const db = req.db

        //encryptado de contraseña
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        //creando paciente tomando sus datos
        usuario = new Paciente ({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: hashPassword,
            password: req.body.password
        })
    
        //guarda el paciente 
        
        const result = await usuario.save()
        res.status(201).send(`paciente ${usuario.nombre} registrado` )
        

        
})