const express = require('express')

module.exports = function(server) {
    
 const router = express.Router()
 server.use('/api', router)

 const billingCycleService = require('../api/CicloPagamento/cicloPagamentoServico')
 billingCycleService.register(router, '/billingCycles')

}