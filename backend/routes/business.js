const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware')
const logedAuth = require('../middlewares/unloggedMiddleware')

const businessController = require('../controllers/businessController');


router.post('/phones-by-client' ,auth, businessController.phonesByClientId)
router.post('/repairs-by-phone' ,auth, businessController.repairsByPhone)
router.post('/new-phone' ,auth, businessController.newPhone)
router.post('/assing-repair' ,auth, businessController.assingRepair)
router.get('/repairs-list' ,auth, businessController.repairsList)
// router.post('/create' ,clientsController.createNewClient)



module.exports = router;
