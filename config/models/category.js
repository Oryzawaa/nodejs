const sequelize = require('sequelize')
const db = require('../database/mysql')

var category = db.define('category' , 
{
    category_id : {
       type: sequelize.INTEGER ,
       primaryKey : true
    },
    name : sequelize.STRING , 
},{
    freezeTableName : true , 
    timestamps : false ,
})

category.removeAttribute('id')

module.exports = category