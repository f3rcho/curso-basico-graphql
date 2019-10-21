'use strict'

function errorHandler (error) {
    console.log(error)
    throw new Error('Fallo operacion en el servidor');  
}

module.exports = errorHandler