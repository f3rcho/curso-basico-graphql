'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express') // importamos express
const gqlMiddleware = require('express-graphql') // importar el middleware

const app = express() // creamos el api de express
const port = process.env.port || 3000 // definimos el puerto

// definiendo el esquema
const schema = buildSchema(
    `type Query {
       hello: String,
       saludo: String
    }`
)

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hola mundo'
  },
  saludo: () => {
    return 'Hola a todos'
  }
}
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
