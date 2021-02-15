const {Schema, model} = require('mongoose')

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
        trim: true
        
    },
    password: {
        type: String,
        required: true
    },
    
 
}, {
    timestamps: true
})

module.exports = model('Administrador', adminSchema)