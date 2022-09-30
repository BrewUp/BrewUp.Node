'use strict'

var productionModule = require("../../modules/production/services/productionService.js")

module.exports = async function (fastify, opts) {
  fastify.get('/', {
    schema: {
        description: 'Gets all Production Orders',
        tags: ['Production'],
        response: {
            200: {
                description: 'Success Response',
                type: 'object',
                properties: {
                    msg: { type: 'string' }
                }
            }
        }
    }
  }, (request, reply) => {
    reply.send({ msg: productionModule.sayHello("production") })
  })
}
