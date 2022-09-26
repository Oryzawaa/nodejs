const express = require('express')
const { route } = require('../app')
const router = express.Router()
const db = require('../config/database/mysql')
const controller = require('../controller/index')

router.get('/' , controller.category.getAll)
router.get('/:category_id' , controller.category.getOne)
router.get('/category_id' , controller.category.getSearch)
router.post('/' , controller.category.post)
router.put('/:category_id' , controller.category.update)
router.delete('/:category_id' , controller.category.delete)

module.exports = router