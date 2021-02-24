//funcion para autorizar el rol de usuario
function authorize(role = []) {
    if(typeof role=== 'string'){
        role = [role]
    }
    return [
        (req, res, next) => {
            if(!role.includes(req.usuario.role)) return res.status(403).send('No tienes la autorización para acceder')
            next()
        }
        
    ]
}

module.exports = authorize