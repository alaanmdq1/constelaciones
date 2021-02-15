const {Router} = require('express')
const Admin = require('../../../../database/schemas/Administrador')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

//creando administrador
module.exports = Router().post('/rest/v1/administrador',[
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
       // const {administrador} = req.params
   
        
        const db = req.db

        //encryptado de contraseña
        const salt = await bcrypt.genSalt(12)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        
        const usuarioAdmin = new Admin ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: hashPassword
    })
    try {
        const result = await usuarioAdmin.save()
        .status(201).end(`administrador ${usuarioAdmin.nombre} registrado` )
    } catch(e) {
        throw new Error(e)
    }
})