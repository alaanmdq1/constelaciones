function authorize(roles = []) {
    if(typeof roles=== 'string'){
        roles = [roles]
    }
    return [
        (req, res, next) => {
            if(!roles.includes(req.paciente.role)) return res.status(403).send('No tienes la autorización para acceder')
            next()
        }
        
    ]
}

module.exports = authorize