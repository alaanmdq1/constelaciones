const {Router} = require('express')
const Paciente = require('../../../../../database/schemas/Paciente')

module.exports = Router().get('/rest/v1/paciente/:id', async (req, res) => {
    //const pacienteId = req.params.id
    const paciente = await Paciente.findById(req.params.id) 
    if(!paciente){
        return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
    }
    res.send(paciente)
})