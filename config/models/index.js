const product = require('./product')
const category = require('./category')
const user = require('./user')
const role = require('./role')
const model = {}

model.product = product , 
model.category = category ,
model.user = user ,
model.role = role 

model.role.belongsToMany(model.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
  });
model.user.belongsToMany(model.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  });

  model.ROLES = ["user", "admin", "moderator"];

module.exports = model