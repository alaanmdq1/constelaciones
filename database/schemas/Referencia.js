
const mongoose = require('mongoose')
const usuario = require ('./Usuario')

const referenciaSchema = new mongoose.Schema({
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
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('referencia', referenciaSchema)