'use strict'

require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express') // importamos express
const gqlMiddleware = require('express-graphql') // importar el middleware
const { readFileSync } = require('fs')//para leer mi schema.graphql
const { join } = require('path')//para accesder al path
const resolvers = require('./lib/resolvers')

const app = express() // creamos el api de express
const port = process.env.port || 3000 // definimos el puerto

// definiendo el esquema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema( {typeDefs, resolvers} ) //se define directorio que se van a usar 

// Ejecutar el query hello
/*
graphql(schema, '{ saludo }', resolvers).then((data) => {
    console.log(data)
})
*/
// definir el middleware en un endpoint
app.use('/api', gqlMiddleware({ // url y luego el moddleware
  schema: schema, // decimos cual es el schema
  rootValue: resolvers, // son los resolvers
  graphiql: true // el entorno de desarrollo de graphql. true para activarlo
}))

// escucharnos
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
