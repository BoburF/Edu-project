const { Router } = require('express')
const router = Router()
const admin = require('../../controllers/admin/home/home')
const category = require('./category')

router.get('/', admin.home)
router.use('/category', category)

module.exports = router