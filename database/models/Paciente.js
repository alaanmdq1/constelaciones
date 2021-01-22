const {Schema, model} = require('mongoose')

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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Referencia'
        }
    ]
}, {
    timestamps: true
})

module.exports = model('Paciente', pacienteSchema)
