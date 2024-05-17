require('dotenv').config()
const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./utils/database');

const app = express();

const port = process.env.PORT || 3000;
const host = "localhost";

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });

//test route
app.get('/', (req, res, next) => {
  res.send('Hello World');
});

//CRUD routes
// app.use('/users', require('./routes/users'));

// //error handling
// app.use((error, req, res, next) => {
//   console.log(error);
//   const status = error.statusCode || 500;
//   const message = error.message;
//   res.status(status).json({ message: message });
// });

//sync database
sequelize
  .sync()
  .then(result => {
    console.log("Подключение к базе данных - успех!");
    app.listen(`${port}`);
  })
  .catch(err => console.log(`Ошибка: ${err}`));