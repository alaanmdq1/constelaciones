const {Schema, model} = require('mongoose')
const referencia = ('./Referencia')

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

module.exports = model('Paciente', pacienteSchema)
