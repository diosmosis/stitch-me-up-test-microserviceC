'use strict'

var app = require('koa')()
var router = require('koa-router')()

router.get('/service-c', function* (next) {
  this.body = 'mock-servicec-response'
})

router.get('/service-c2', function* (next) {
  this.body = '(mock-service-c2-response)'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
