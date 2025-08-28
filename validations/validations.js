const { check } = require('express-validator');

const validateParam = (param) =>{
    return check(param)
            .exists()
            .not()
            .isEmpty()
            .withMessage('Debe registrar un valor')
}

const validateBoolean = (param) =>{
    return check(param)
            .isBoolean()
            .withMessage('Debe ser un valor de 0 o 1')
}

const validateDate = (param) =>{
    return check(param)
            .isDate()
            .withMessage('Debe tener un formato de fecha valido (AAAA-MM-DD)')
}

const validateNumber = (param) =>{
    return check(param)
            .isFloat()
            .withMessage('Debe ser un numero')
} 

const validateName = (param) =>{
    return check(param)
            .isAlpha('es-ES',{ignore: ' '})
            .withMessage('Solo puede tener caracteres de la A a la Z')
}

const validateString = (param) =>{
    return check(param)
            .isAlpha('es-ES',{ignore: ' .-_()#'})
            .withMessage('Solo puede tener caracteres de texto')
}

const validateEmail = (param) =>{
    return  check(param)
            .isEmail()
            .withMessage('Debe tener un formato de correo valido')
}

const validateLength = (param, options) =>{
    return check(param)
            .isLength({min: options.min, max: options.max})
            .withMessage(`Tiene que tener minimo ${options.min} y maximo ${options.max} caracteres`)
}

module.exports ={
    validateParam,
    validateNumber,
    validateString,
    validateLength,
    validateName,
    validateDate,
    validateBoolean,
    validateEmail
}