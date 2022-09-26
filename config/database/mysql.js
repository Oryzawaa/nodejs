var sequelize = require('sequelize')
var db = new sequelize('mimpi' , 'root' , '' , {
    dialect : 'mysql' , 
    host : 'localhost'
})

module.exports = db