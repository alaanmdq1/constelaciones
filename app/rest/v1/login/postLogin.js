const {Router} = require('express')
const Pacientes = require('../../../../database/schemas/Usuario')

const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')



module.exports = Router().post('/rest/v1/login',[
    //chekea validacion
    check('email').isEmail(),
    check('password').isLength({min: 3})],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()})
        }
        //chekea si el email es correcto
        let usuario = await Pacientes.findOne({email: req.body.email})
        if(!usuario) return res.status(400).send('E-mail o contraseña invalido')
       

        //chekea si la contraseña es correcta
        const validPasswordUsuario = await bcrypt.compare(req.body.password, usuario.password)
        if(!validPasswordUsuario) return res.status(400).send('Email o contraseña invalido')
       

        //json web token auth usuario y administrador
        const jwtUsuario = usuario.generateJWT()
        
        
        if(jwtUsuario) return res.header('Authorization', jwtUsuario).send({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email
        })
       
        
    })