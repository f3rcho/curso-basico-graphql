'use strict'

const queries = require('./queries')
const mutations = require('./mutations')
const types = require('./types')

module.exports = {
    Query: queries, 
    Mutation: mutations,
    ...types //deconstruir types porque no tiene el mismo formato del resto
}