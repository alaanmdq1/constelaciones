const {Router} = require('express')
const Admin = require('../../../../database/schemas/Administrador')
const {check, validationResult} = require('express-validator')

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
   
        const {password} = req.body
        const db = req.db
        const usuarioAdmin = new Admin ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const result = await usuarioAdmin.save()
        .status(201).end(`administrador ${result} registrado, ${db.Administrador}` )
    } catch(e) {
        throw new Error(e)
    }
})