const {Schema, model} = require('mongoose')
const referencia = ('./Referencia')

const pacienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
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
