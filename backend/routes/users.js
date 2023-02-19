const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware')
const logedAuth = require('../middlewares/unloggedMiddleware')

const usersController = require('../controllers/usersController');


router.get('/list' ,auth, usersController.list)
router.post('/create' ,usersController.createNewUser)
router.post('/login' ,logedAuth, usersController.login)
router.get('/logout' ,auth, usersController.logout)


module.exports = router;
