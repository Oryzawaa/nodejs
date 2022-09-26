const express = require('express')
const router = express.Router()
const controller = require('../controller/index')

const multer = require('multer')
const storage = multer.diskStorage({
    destination : function(req , file , cb) {
        cb(null , './assets/')
    },
    filename : function(req , file , cb) {
        cb(null , file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get('/' , controller.product.getAll)
router.get('/:id' , controller.product.getOne)
// router.get('/search' , controller.product.getSearch)
router.post('/' , upload.single('image') , controller.product.post)
router.put('/:id' , controller.product.update)
router.delete('/:id' , controller.product.delete)

module.exports = router