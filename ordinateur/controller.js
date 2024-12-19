var express = require('express')
var router = express.Router()
const { list, create, update, deleteU, searchByPrice } = require('./ordinateurService')
//var validate = require('../middleware/validation')

const { socketHandler } = require('./ordinateur/controller');
socketHandler(io); // Appel du gestionnaire d'événements Socket.IO

router.get('/list', list)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteU)
router.get('/recherche', searchByPrice);

module.exports = router