const {Router} = require('express')
const Referencia = require('../../../../../../database/schemas/Paciente')

module.exports = Router().delete('/rest/v1/paciente/:id', async (req, res) => {
    const referencia = await Referencia.findByIdAndDelete(req.params.id) 
        if(!referencia){
           return res.status(404).send('El paciente con ese ID no se encuentra en la Base de Datos')
        }
    //const pacienteId = req.params.id
    res.status(200).send('referencia borrada de la base de datos')
})