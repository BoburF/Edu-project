const { Router } = require('express')
const router = Router()
const category = require('../../controllers/admin/category/category')

router.get('/', category.home)

module.exports = router