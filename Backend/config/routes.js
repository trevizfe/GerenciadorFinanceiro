const express = require('express')

module.exports = function(server) {
 const router = express.router()
 server.use('/api', router)   
}