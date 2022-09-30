'use strict'

var pubsModule = require("../../modules/pubs/services/pubsService.js")

module.exports = async function (fastify, opts) {
  fastify.get('/', {
    schema: {
        description: 'Gets all Pubs',
        tags: ['Pubs'],
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
    reply.send({ msg: pubsModule.sayHello("RingoStar") })
  })
}
