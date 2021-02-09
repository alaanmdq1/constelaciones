
const {Schema, model} = require('mongoose')
const paciente = require ('./Paciente')

const referenciaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20

    },
    referencia: {
        type: String,
        required: true
    },
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente'
    }
}, {
    timestamps: true
})

module.exports = model('Referencia', referenciaSchema)