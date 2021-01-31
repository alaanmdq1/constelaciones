
const {Schema, model} = require('mongoose')

const referenciaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    referencia: {
        type: String,
        required: true
    },
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente'
    }
}, {
    timestamps: true
})

module.exports = model('Referencia', referenciaSchema)