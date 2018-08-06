'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT: '"http://server.izmqh.com"'
  API_ROOT: '"http://169.254.225.236:7777"'
})