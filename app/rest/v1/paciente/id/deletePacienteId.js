const {Router} = require('express')
const {pacienteSchema} = require('../../../../../database/schemas/Paciente')

module.exports = Router().delete('/rest/v1/paciente/id/:id', (req, res) => {
    const paciente = pacienteSchema.find(paciente => Paciente.id === parseInt(req.params.id)) 
        if(!paciente){
           return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
        }
    //const pacienteId = req.params.id
    res.status(200).send('Paciente borrado de la base de datos')
})