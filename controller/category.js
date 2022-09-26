const model = require('../config/models/index')
const controller = {}
// const { Op } = require('sequelize')
// const { search } = require('../app')

controller.getAll = async function(req , res){
    try {
        let category  = await model.category.findAll({ })
            if ( category.length > 0){
                res.status(200).json({
                    massage : 'Get Method category' ,
                    data : category
                })
            }else{
                res.status(200).json({
                    massage : 'Tidak ada data' ,
                    data : []
                })
            }
    } catch (error) {
        res.status(404).json({
            message : error.massage
        })
    }
}

controller.getOne = async function(req , res){
    try {
        let category = await model.category.findAll({
            where : {
                id : req.params.id
            }
        })
        if ( category.length > 0){
            res.status(200).json({
                massage : 'Get Method category' ,
                data : category
            })
        }else{
            res.status(200).json({
                massage : 'Tidak ada data' ,
                data : []
            })
        }
    } catch (error) {
        res.status(404).json({
            message : error.massage
        })
    }
}

controller.getSearch = async function(req , res){

    const search = req.query.keyword

    try {
        let category = await model.category.findAll({})
        if ( category.length > 0){
            res.status(200).json({
                massage : 'Get Method category' ,
                data : category
            })
        }else{
            res.status(200).json({
                massage : 'Tidak ada data' ,
                data : []
            })
        }
    } catch (error) {
        res.status(404).json({
            message : error.massage
        })
    }
}


controller.post = async function (req , res){
    try {
        let category = await model.category.create({
            id : req.body.id , 
            name : req.body.name ,  
        },{
            where : {
                id : req.params.id
            }
        })
        res.status(201).json({
            message : 'Berhasil Menyimpan Data' , 
            data : category
        })
    } catch (error) {
        res.status(404).json({
            message : error.massage
        })
    }
}

controller.update = async function (req, res) {
    try {
        let category = await model.category.update({
            name : req.body.name , 
        },{
            where : {
                category_id : req.params.category_id
            }
        })
        res.status(200).json({
            message : 'Berhasil Mengubah Data' ,
            data : category
        })
    } catch (error) {
        res.status(404).json({
            message : error.massage
        })
    }
}

controller.delete = async function(req , res) {
    try {
        let category = await model.category.destroy({
            where : {
               category_id : req.params.category_id
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