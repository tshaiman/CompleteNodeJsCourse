'use strict'

// load .env in local development
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ silent: true })
}


console.log("I am in config and the host is " , process.env.DB_HOST)