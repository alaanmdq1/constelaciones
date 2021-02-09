const {Router} = require('express')
const Paciente = require('../../../../database/schemas/Paciente')
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
        const usuario = new Paciente ({
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password
        })
    
        //guarda el paciente 
        try {
            const result = await usuario.save()
            res.status(201).send(`paciente ${paciente} registrado, ${db.Paciente}` )
            console.log(result)
        } catch (e) {
            throw new Error(e)
        }
        
})