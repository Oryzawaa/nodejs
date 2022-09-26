const model = require('../config/models/index')
const db = require('../config/database/mysql')
const controller = {}
// const { Op } = require('sequelize')

controller.getAll = async function(req , res){
    try {
        let product = await db.query('SELECT product.id as idProduct, product.name as nameProduct , product.stock as stockProduct, product.category_id as idCategory, category.name as nameCategory , product.image FROM product JOIN category ON product.category_id = category.category_id ORDER BY product.id ASC')
            if ( product.length > 0){
                res.status(200).json({
                    massage : 'Get Method Product' ,
                    data : product
                })
            }else{
                res.status(200).json({
                    massage : 'Tidak ada data' ,
                    data : []
                })
            }
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

controller.getOne = async function(req , res){
    try {
        let product = await model.product.findAll({
            where : {
                id : req.params.id
            }
        })
        if ( product.length > 0){
            res.status(200).json({
                massage : 'Get Method Product' ,
                data : product
            })
        }else{
            res.status(200).json({
                massage : 'Tidak ada data' ,
                data : []
            })
        }
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

// controller.getSearch = async function(req , res){

//     const search = req.query.keyword

//     try {
//         let product = await model.product.findAll({
//             attributes : [['id' , 'idProduct'] , ['name' , 'nameProduct'] , ['category_id' , 'category'] , ['stock' , 'stock']] , 
//             where : {
//                 [Op.or] : [{
//                     id : {
//                         [Op.like] : '%' +search+ '%'
//                     }
//                 },{
//                     name : {
//                         [Op.like] : '%' +search+ '%'
//                     }
//                 }]
//             }
//         })
//         if ( product.length > 0){
//             res.status(200).json({
//                 massage : 'Get Method Product' ,
//                 data : product
//             })
//         }else{
//             res.status(200).json({
//                 massage : 'Tidak ada data' ,
//                 data : []
//             })
//         }
//     } catch (error) {
//         res.status(404).json({
//             message : error.massage
//         })
//     }
// }


controller.post = async function (req , res     ){
    try {
        let product = await model.product.create({
            id : req.body.id , 
            name : req.body.name , 
            category_id : req.body.category_id , 
            stock : req.body.stock ,
            image : req.file.path
        },{
            where : {
                id : req.params.id
            }
        })
        res.status(201).json({
            message : 'Berhasil Menyimpan Data' , 
            data : product
        })
    } catch (error) {
        res.status(404).json({
            message : error.massage
        })
    }
}

controller.update = async function (req, res) {
    try {
        let product = await model.product.update({
            name : req.body.name , 
            category_id : req.body.category_id ,
            stock : req.body.stock
        },{
            where : {
                id : req.params.id
            }
        })
        res.status(200).json({
            message : 'Berhasil Mengubah Data' ,
            data : product
        })
    } catch (error) {
        res.status(404).json({
            message : error.massage
        })
    }
}

controller.delete = async function(req , res) {
    try {
        let product = await model.product.destroy({
            where : {
                id : req.params.id
            }
        })
        res.status(200).json({
            message : 'Berhasil Menghapus Data'
        })
    } catch (error) {
        res.status(404).json({
            message : error.massage
        })
    }
}

module.exports = controller