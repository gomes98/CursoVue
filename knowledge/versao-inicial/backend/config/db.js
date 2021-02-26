const config = require('../knexfile')
const knex = require('knex')(config)

// knex.migrate.latest([config]) para fazer a migration automatica
module.exports = knex