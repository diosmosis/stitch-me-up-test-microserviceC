'use strict'

const app = require('koa')()
const router = require('koa-router')()
const request = require('request-promise')

router.get('/service-c', function* (next) {
  const serviceDResponse = yield request.get(process.env.MICROSERVICED_ENDPOINT + '/service-d')
  this.body = '(' + ['service-c-response', serviceDResponse].join(',') + ')'
})

router.get('/service-c2', function* (next) {
  this.body = '(service-c2-response)'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
