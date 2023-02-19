const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware')
const logedAuth = require('../middlewares/unloggedMiddleware')

const clientsController = require('../controllers/clientsController');


router.get('/list' ,auth, clientsController.list)
router.post('/create' ,clientsController.createNewClient)



module.exports = router;
