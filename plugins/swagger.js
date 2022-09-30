'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function(fastify, opts) {
  fastify.register(require('@fastify/swagger'), {
      routePrefix: '/documentation',
      swagger: {
        info: {
          title: 'BrewUp API Documentation',
          description: 'BrewUp - DDD patterns Demo',
          version: '0.1.0'
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
      },
      exposeRoute: true
    })
})