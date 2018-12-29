require('dotenv').config()

const withTypescript = require('@zeit/next-typescript')
const path = require('path')

const config = {
  ...withTypescript(),
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    SENTRY_DSN: process.env.SENTRY_DSN,
    GA: process.env.GA
  }
}
module.exports = config