const jwt = require('jwt-simple')

const moment = require('moment');

require('dotenv').config();

const checkToken = (req, res, next) => {

    if (!req.headers['token-login']) {
        return  res.status(401).json({error: "Necesitas iniciar sesión para acceder a este contenido"});
    }

    const tokenCredencial = req.headers['token-login'];
    
    let payload = {};
    
    try {
        payload = jwt.decode(tokenCredencial, process.env.PASSDECODE);
    } catch (e) {
        return  res.status(401).json({error:'Necesitas iniciar sesión para acceder a este contenido'});
    }

    if (payload.expiredAt < moment().unix()) {
        return  res.status(408).json({error:`El tiempo limite de uso en la pagina a caducado, por favor vuelva a iniciar sesión`});
    }

    req.nombreEmpleado = payload.nombreEmpleado
    req.idEmpleado = payload.idEmpleado
    req.tipoUsuario = payload.tipoUsuario

    next();
}

module.exports = checkToken