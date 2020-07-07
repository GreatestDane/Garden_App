
const express = require('express')

const UserCtrl = require('./user-ctrl.js')

const router = express.Router()

router.post('/movie', UserCtrl.createUser)
router.put('/movie/:id', UserCtrl.updateUser)
router.delete('/movie/:id', UserCtrl.deleteUser)
router.get('/movie/:id', UserCtrl.getUserById)
router.get('/movies', UserCtrl.getUsers)

module.exports = router