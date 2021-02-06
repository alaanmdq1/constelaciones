const {Router} = require('express')
const {pacienteSchema} = require('../../../../database/schemas/Paciente')
const {check, validationResult} = require('express-validator')

//creando paciente
module.exports = Router().post('/rest/v1/:paciente',[
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
        const {paciente} = req.params
   
        const {password} = req.body
        const db = req.db
        const usuario = new PacienteSchema ({
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password
        })
    /*if(!usuario.nombre){
        res.status(400).send("Introduce un nombre")
        return
    }
    if(!usuario.apellido){
        res.status(400).send("Introduce un apellido")
    }
    if(!usuario.email){
        res.status(400).send("Introduce un email")
    }
    if(!req.body.password || req.body.password < 5){
        res.status(400).send("tu contraseña debe tener mas de 5 caracteres")
        return
    }*/
        //guarda el paciente 
        const result = await usuario.save()
        res.status(201).end(`paciente ${paciente} registrado, ${db.Paciente}` )
})