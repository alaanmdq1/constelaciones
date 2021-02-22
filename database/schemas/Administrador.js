const {Schema, model} = require('mongoose')
const dotEnv = require('dotenv')
const jwt = require('jsonwebtoken')
dotEnv.config()

const {SECRET_KEY_ADMIN} = process.env

const adminSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        
    },
    password: {
        type: String,
        required: true
    },
    role: String
    
 
}, {
    timestamps: true
})
//genera el jwt
adminSchema.methods.generateJWT = function(){
    return jwt.sign({_id: this._id, nombre: this.nombre, role: this.role}, SECRET_KEY_ADMIN)
}

module.exports = model('Administrador', adminSchema)