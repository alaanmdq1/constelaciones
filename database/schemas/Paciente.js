const {Schema, model} = require('mongoose')
const dotEnv = require('dotenv')
const referencia = ('./Referencia')
const jwt = require('jsonwebtoken')
dotEnv.config()

const {SECRET_KEY_PACIENTE } = process.env

const pacienteSchema = new Schema({
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
        trim: true,
        minLength: 6,
        maxLength: 20,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    date: { type: Date, default: Date.now },
    referencia: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Referencia'
        }
    ]
}, {
    timestamps: true
})
//genera el jwt
pacienteSchema.methods.generateJWT = function(){
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre, 
        role: this.role
    } , SECRET_KEY_PACIENTE)
}

module.exports = model('Usuario', pacienteSchema)
