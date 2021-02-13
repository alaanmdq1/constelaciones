const {Router} = require('express')
const Paciente = require('../../../../database/schemas/Paciente')
const {check, validationResult} = require('express-validator')

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

        //const db = req.db
        //creando paciente tomando sus datos
        const usuario = new Paciente ({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password
        })
    
        //guarda el paciente 
        
        const result = await usuario.save()
        res.status(201).send(`paciente ${result} registrado, ${db.Paciente}` )
        console.log(result)

        
})