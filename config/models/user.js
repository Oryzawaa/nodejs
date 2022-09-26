const sequelize = require('sequelize')
const db = require('../database/mysql')

var user = db.define('users' , 
{
    id : {
       type: sequelize.INTEGER ,
       primaryKey : true
    },
    username : sequelize.STRING , 
    email : sequelize.STRING , 
    password : sequelize.STRING
},{
    freezeTableName : true , 
    timestamps : false ,
})

category.removeAttribute('id')

module.exports = user