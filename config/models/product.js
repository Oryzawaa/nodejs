const sequelize = require('sequelize')
const db = require('../database/mysql')
const category = require('./category')

var product = db.define('product' , 
{
    id : {
       type: sequelize.INTEGER ,
       primaryKey : true
    },
    name : sequelize.STRING , 
    category_id : sequelize.STRING ,
    stock : sequelize.INTEGER , 
    image : sequelize.STRING
},{
    freezeTableName : true , 
    timestamps : false 
})

 product.hasOne(category , { foreignKey : 'category_id'})
 product.belongsTo(category , { foreignKey : 'category_id '})

product.removeAttribute('id')
module.exports = product