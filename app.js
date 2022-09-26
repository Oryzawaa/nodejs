const express = require('express')
const sequelize = require('sequelize')
const app = express()
const cors = require("cors");
const productRoutes = require('./routes/product')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth')
const categoryRoutes = require('./routes/category')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const model = require('./config/models')
const Role = model.role

model.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
  });

  function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

// app.use(basicAuth({
//     users :{ admin : 'supersecret' } , 
//     unauthorizedResponse : basicAuthResponse
// }))



var corsOptions = {
    origin: "http://localhost:8081"
  };


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });



// function basicAuthResponse(req) {
//     return req.auth 
//     ? ('Credentials' + req.auth.user + ':' + req.auth.password + 'rejected') 
//     : 'Unauthorized'
// }

app.use(bodyParser.urlencoded({ extended:false}))
app.use(morgan('dev'))
app.use(bodyParser.json())

//////////////////////////////////////////
app.use('/product' , productRoutes)
app.use('/category' , categoryRoutes)
app.use('/auth' , authRoutes)
app.use('user' , userRoutes)
app.use('/assets' , express.static('assets'))

app.use((req , res, next) => {
    const error = new Error('Tidak Ditemukan')
    error.status = 404 
    next(error)
})

app.use((error , req , res , next) => {
    res.status(error.status || 500 )
    res.json({
        error : {
            message : error.message
        }
    })
})
module.exports = app