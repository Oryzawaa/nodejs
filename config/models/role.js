const sequelize = require('sequelize')
const db = require('../database/mysql')

var role = db.define('role' , 
{
    id : {
       type: sequelize.INTEGER ,
       primaryKey : true
    },
    name : sequelize.STRING , 
},{
    freezeTableName : true , 
    timestamps : false ,
})

category.removeAttribute('id')

module.exports = role